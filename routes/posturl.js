import express from 'express';
import  url from '../models/model.js';
export const router = express.Router();

import validUrl from 'valid-url';
import shortid from 'shortid';
import config from 'config';

// POST url /api/url/shorten
//to call psot request henadler method 
router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = config.get('baseURL');

  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json('invalid base url');
  }

  // create url code
  const urlCode = shortid.generate();

  // check long url
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = baseUrl + '/' + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });
        await url.save();
        res.json(url);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json('server error');
    }
  } else {
    res.status(401).json('Invalid long url');
  }
});
