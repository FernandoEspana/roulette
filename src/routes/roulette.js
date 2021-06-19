const router = require('express').Router();
const { create, open, close } = require('../controllers/roulette.controller');

router.route('/create').post(create);
router.route('/:rouletteId').put(open);
router.route('/close/:rouletteId').post(close);


module.exports = router;