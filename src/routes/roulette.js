const router = require('express').Router();
const { create, open, close, list } = require('../controllers/roulette.controller');

router.route('/create').post(create);
router.route('/open/:rouletteId').put(open);
router.route('/close/:rouletteId').post(close);
router.route('/list').get(list);

module.exports = router;