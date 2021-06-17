require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { connect } = require('./db');

const port = process.env.PORT || 8000;
const app = express();
connect();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.listen(port, ()=> {
  console.log(`Server is running on port ${port}`);
})