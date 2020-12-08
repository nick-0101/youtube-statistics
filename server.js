const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const rateLimit = require('express-rate-limit');

// Load config
require('dotenv').config();

const app = express();

// Body Parser
app.use(bodyParser.json());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 25,
  message: 'Too many requests from this IP, please try again in 15 minutes',
});

app.use('/api/fetchChannelInfo/channelInfo', apiLimiter);

// API
app.get('/api/fetchChannelInfo/channelInfo', async (req, res, err) => {
  const API_KEY = process.env.API_KEY;

  const config1 = {
    method: 'get',
    url:
      'https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&%2Fthumbnails&type=channel&q=' +
      req.query.q +
      API_KEY,
  };

  const STATISTICS =
    'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=';

  try {
    let channelInfo;

    const { data } = await axios(config1);

    if (data.items === undefined || data.items.length == 0) {
      return res.status(500).json({
        message: "Couldn't find youtuber",
        type: 'ServerError',
      });
    } else {
      const {
        data: { items },
      } = await axios.get(STATISTICS + data.items[0].id.channelId + API_KEY);

      channelInfo = {
        snippet: data.items[0].snippet,
        stats: items[0].statistics,
      };

      res.send(channelInfo);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'Hmm. Something went wrong on our end.',
      type: 'ServerError',
    });
  }
});

const publicPath = path.join('youtube-statistics', 'build');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile('youtube-statistics/build/index.html', { root: __dirname });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Port running on ${port}`));
