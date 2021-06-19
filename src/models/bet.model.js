const { Schema, model, models } = require('mongoose');

const betSchema =new Schema({
  userId: {
    type: String,
    required: [ true, 'userID is required' ],
  },
  amount: {
    type: Number,
    min: [ 1, 'Not enough money' ],
    max: [ 10000, 'Maximun amount 10K' ],
  },
  betNumber: {
    type: Number,
    min: 0,
    max: 36,
  },
  color: {
    type: String,
    enum: [ 'RED', 'BLACK' ],
  },
  roulettID: {
    type:Schema.Types.ObjectId,
    ref: 'Roulette',
  } 
}, {
  timestamps: true,
});

const Bet = model('Bet', betSchema);

module.exports = Bet;