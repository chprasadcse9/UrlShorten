//import
import express from 'express';

import url from '../models/model.js';

exports.router = express.Router();

//to call get request handler method
exports.router.get("/:userId", chekAuth, (req, res, next) => {
  Url.find({ creatorId: req.userData.userId })
    .select("_id url siteId")
    .exec()
    .then(result => {
      res.status(200).json({
        success: true,
        count: result.length,
        urlData: result.map(result => {
          return {
            _id: result._id,
            siteId: result.siteId,
            orgUrl: result.url,
            short: {
              shortUrl: SHORTENER_URL + result.siteId
            }
          };
        })
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});



/*
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
*/