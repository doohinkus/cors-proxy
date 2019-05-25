const express = require('express');
const request = require('request');

const app = express();

const port = 5000;

const url = "https://rss.itunes.apple.com/api/v1/us/apple-music/new-releases/all/100/explicit.json";

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res, next) => {
  request(
    { url },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      return res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || port
app.listen(PORT, () => console.log(`listening on ${PORT}`));