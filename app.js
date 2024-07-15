const express = require('express');
const qr = require('qr-image');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Updated route
app.post('/generate-qr', (req, res) => {
  const text = req.body.text;
  const qrSvg = qr.imageSync(text, { type: 'png' });
  res.send({ 
    img: `data:image/png;base64,${qrSvg.toString('base64')}`,
    text: text
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
