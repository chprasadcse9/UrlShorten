//import
import express from 'express';

import url from '../models/model.js';

exports.router = express.Router();
/*
//to call get request handler method
router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json('No url found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('server error');
  }
});
*/

exports.router.get('/:code', () => {
  var promise = new Promise();
  this.baseModel.findOne( function(error, result) {
    if (error) {
      promise.reject(error, true);
    } else {
      promise.resolve(result);
    };
  });
  return promise;
});