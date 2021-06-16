const express = require('express');
const app = express();

const port = 8000;

app.get('/', (req, res) => {
  res.status(200).json({message: 'Hola Mundo!!!'});
})

app.listen(port, ()=> {
  console.log(`Server is running on port ${port}`);
})