//import
import express from 'express';
import Url from '../models/model.js';
import checkAuth from '../middleware/auth.js';

const router = express.Router();

//to call get request handler method
router.get("/", checkAuth, (req, res, next) => {
  Url.find({ creatorId: req.userData.userId })
    .select("_id url shortId")
    .exec()
    .then(result => {
      res.status(200).json({
        success: true,
        count: result.length,
        urlData: result.map(result => {
          return {
            _id: result._id,
            shortId: result.shortId,
            orgUrl: result.url,
            short: {
              shortUrl: SHORTENER_URL + result.shortId
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

export default router;


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