
import mongoose from 'mongoose';


exports.urlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  shortId: {
    type: String,
    default: shortid.generate
  },
  creatorId: {
    type: String,
    require: true
  }
});


export default mongoose.model('Url', UrlSchema);