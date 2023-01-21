//import
import express from 'express';
export const router = express.Router();
import url from '../models/model.js';


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


export default router;