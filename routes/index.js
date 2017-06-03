const { Router } = require('express');

const router = Router();

router.use(api);
router.get('/', (req, res) => res.render('index'));

module.exports = router;
