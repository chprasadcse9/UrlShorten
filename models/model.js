
import mongoose from 'mongoose';


exports.URLSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  shortId: {
    type: String,
    
  },
  creatorId: {
    type: String,
    require: true
  }
});


export default mongoose.model('Url', URLSchema);


