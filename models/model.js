
import mongoose from 'mongoose';


exports.urlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: { type: String, default: Date.now },
});


export default mongoose.model('Url', UrlSchema);