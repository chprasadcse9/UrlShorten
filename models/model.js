//import
import mongoose from 'mongoose';

//MongoDB schema creation
const urlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: { type: String, default: Date.now },
});


export default mongoose.model('Url', UrlSchema);