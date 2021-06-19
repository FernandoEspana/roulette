require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { connect } = require('./db');
const rouletteRouter = require('./routes/roulette');
const betRouter = require('./routes/bet');

const port = process.env.PORT || 8000;
const app = express();
connect();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/roulette', rouletteRouter );
app.use('/bet', betRouter );


app.listen(port, ()=> {
  console.log(`Server is running on port ${port}`);
})