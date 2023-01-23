//import
import express from 'express';
import  url from '../models/model.js';
import chekAuth from '../middleware/check-auth';
import PRE_HTTP from 'http://';


import Promise from 'node-promise';
import validUrl from 'valid-url';
import shortid from 'shortid';
import config from 'config';

const router = express.Router();

// POST url /api/url/shorten
//to call psot request henadler method 

exports.router.post("/ShortId", chekAuth, (req, res, next) => {
  req.check("url", "invalid URL").isURL();
  const validationErrors = req.validationErrors();
  if (validationErrors) {
    res.status(400).json({
      error: validationErrors
    });
  } else {
    if (!req.body.url.match(/^[a-zA-Z]+:\/\//)) {
      var reqUrl = PRE_HTTP + req.body.url;
    } else {
      var reqUrl = req.body.url;
    }
    const url = new Url({
      url: reqUrl,
      creatorId: req.userData.userId
     });
    url
      .save()
      .then(result => {
        res.status(201).json({
          success: true,
          urlCreated: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  }
});

/*
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

  generatePromise.then((ShortURLObject) =>{
    promise.resolve(ShortURLObject);
  }, (error) =>{
    promise.reject(error, true);
  });

  return promise;
});
*/