const fs = require('fs');

function putFileSize(req, res) {
  const { fileUrl } = req.body;
  const ext = fileUrl.split(':')[1].split('/')[1].split(';')[0];
  const bitmap = new Buffer(fileUrl, 'base64');
  const filename = `data/${Date.now()}.${ext}`;

  fs.writeFileSync(filename, bitmap);

  res.json({ filename });
}

module.exports = putFileSize;
