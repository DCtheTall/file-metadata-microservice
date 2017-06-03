const { Router } = require('express');
const postFileSize = require('./post-file-size');
const getFileSize = require('./get-file-size');

const router = Router();

router.get('/', (req, res) => res.render('index'));
router.post('/api/file/size', postFileSize);
router.get('/api/file/size', getFileSize);

module.exports = router;
