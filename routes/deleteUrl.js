import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import url from '../models/model.js';

exports.router = express.Router();

exports.router.delete("/:urlId", (req, res, next) => {
    Url.findByIdAndRemove(req.params.urlId)
      .exec()
      .then(result => {
        res.status(202).json({
          message: "URL removed!"
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
  