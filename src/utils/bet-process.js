function randomNumber() {
  return Math.floor(Math.random() * 37);
}

function returnColor(number) {
  return number % 2 === 0?'RED':"BLACK";
}

module.exports ={
  randomNumber,
  returnColor,
}