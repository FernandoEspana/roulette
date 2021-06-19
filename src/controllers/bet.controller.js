const Bet = require('../models/bet.model');
const Roulette = require('../models/roulette.model');

module.exports = {
  async create(req, res) {
    
    const userId  = req.get('userId');
    const { amount, betNumber, color } = req.body;
    const { rouletteId } = req.params;
      
    try {
      const roulette = await Roulette.findById(rouletteId);
      if( !roulette.state ){
        return res.status(400).json({ message:'Roulette is closed!!'});
      }
      const bet = await Bet.create({
        userId,
        amount,
        rouletteId,
        betNumber,
        color,
      });
      roulette.betIDs.push(bet._id);
      await roulette.save({ validateBeforeSAve: false});
      res.status(201).json({message: 'bet created succesfully'});
      
    } catch (error) {
      res.status(400).json({ message: error._message});
    }
  }
}