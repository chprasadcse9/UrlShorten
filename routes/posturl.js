//import
import express from 'express';
import  url from '../models/model.js';

import Promise from 'node-promise';

import validUrl from 'valid-url';
import shortid from 'shortid';
import config from 'config';

const router = express.Router();
/*
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
*/
//const urlCode = shortid.generate();
exports.routes.post('/shorten', () =>{
  var generatePromise
    , promise = new Promise();

  document['data'] = document.data || null;

  // hash was specified, so we should always honor it
  if (document.hasOwnProperty()) {
    generatePromise = ShortURL.create(document);
  } else {
    document['hash'] = ID.store(document.URL);
    generatePromise = ShortURL.findOne({URL : document.URL}, document, {});
  }

  generatePromise.then(function(ShortURLObject) {
    promise.resolve(ShortURLObject);
  }, function(error) {
    promise.reject(error, true);
  });

  return promise;
});