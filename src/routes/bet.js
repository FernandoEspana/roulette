const router = require('express').Router();
const { create } = require('../controllers/bet.controller');
const { validateFields } = require('../middlewares/validate-betFileds');

router.route('/create/:rouletteId').post(validateFields, create);

module.exports = router;

