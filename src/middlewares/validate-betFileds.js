
function validateFields(req, res, next) {
  
  const { betNumber, color } = req.body;
  const validation = !!betNumber ^ !!color; 
  if( !validation ) {
    return res.status(400).json({
      message:'Color and bet number colide!!!'
    });
  }
  next();
}

module.exports = {
  validateFields
}  

