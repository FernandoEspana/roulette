const Roulette = require('../models/roulette.model');

module.exports = {
  async create(req, res) {
    const body = { state: false, betIDs: [] };
    try {
      const roulette = await Roulette.create(body);
      res.status(201).json({
        rouletteId: `${ roulette._id }`,
      })
    } catch (error) {
      res.status(400).json({ message: error });
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
    try {
      const roulette = await Roulette.findById(rouletteId).populate('betIDs');
      console.log(roulette);
      res.status(200).json(roulette);
    } catch (error) {
      res.status(400).json({message: 'Roullete did not found'});
    }
  }
}