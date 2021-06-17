const { Schema, model } = require('mongoose');

const rouletteSquema = new Schema({
  state: {
    type: Boolean,
    required: [ true, 'Roulette state is required' ],
  },
  betIDs: {
    type: [{type: Schema.Types.ObjectId, ref: 'Bet'}]
  }
}, {
  timestamps: true,
});

const Roulette = model('Roulette', rouletteSquema);

module.exports = Roulette;