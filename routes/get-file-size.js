const fs = require('fs');

function getFileSize(req, res) {
  const { name: filename } = req.query;
  const { size } = fs.statSync(filename);

  fs.unlinkSync(filename);
  res.json({ size });
}

module.exports = getFileSize;
