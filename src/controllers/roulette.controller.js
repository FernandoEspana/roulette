const Roulette = require('../models/roulette.model');
const { randomNumber, returnColor } = require('../utils/bet-process');

module.exports = {
  async create(req, res) {
    const body = { state: false, betIDs: [] };
    try {
      const roulette = await Roulette.create(body);
      res.status(201).json({
        rouletteId: `${ roulette._id }`,
      })
    } catch (error) {
      res.status(401).json({ message: error });
    }
  },
  async open(req, res) {
    const { params: { rouletteId } } = req;
    const body = { state: true };
    try {
      await Roulette.findByIdAndUpdate(rouletteId, body, {new: true});
      res.status(200).json({ message: 'Succes operation'});
    } catch (error) {
      res.status(400).json({ message: 'Something went wrong!!'});
    }
  },
  async close(req, res) {
    const { params:{ rouletteId } } = req;
    const winnerNumber = randomNumber();
    const winnerColor = returnColor(winnerNumber);
    const body = { state: false };
    
    try {
      const roulette = await Roulette.findById(rouletteId).populate('betIDs');
      if( !roulette.state ) {
        return res.status(400).json({ message: 'Roulette is closed!!'});
      } 
      const results = roulette.betIDs.map(bet => {
        let status, earnings;
        if( bet.betNumber === winnerNumber ){
          status = 'WIN';
          earnings = bet.amount * 5;
        } else if ( bet.color === winnerColor ){
          status = 'WIN';
          earnings = bet.amount * 1.8;
        } else {
          status = 'LOSE';
          earnings = 0;
        }
        return { status, earnings, bet };
      });
      await Roulette.findByIdAndUpdate(rouletteId, body, {new: true});
      res.status(200).json({ winnerNumber, winnerColor, results });
    } catch (error) {
      res.status(400).json({message: 'Roulette did not found'});
    }
  },
  async list(req, res) {
    try {
      const roulettes = await Roulette.find().populate('betIDs');
      res.status(200).json(roulettes); 
    } catch (error) {
      res.status(400).json({ message: 'Roulettes request present some error'});
    }
  }
}