const { Schema, model } = require('mongoose');

const rouletteSquema = new Schema({
  state: {
    type: Boolean,
    default: false,
  },
  betIDs: {
    type: [{type: Schema.Types.ObjectId, ref: 'Bet'}]
  }
}, {
  timestamps: true,
});

const Roulette = model('Roulette', rouletteSquema);

module.exports = Roulette;