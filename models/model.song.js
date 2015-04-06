var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SongsSchema = new Schema({
  title: String,
  author: String,
  duration: String,
  genre: {
    type: [{
      type: String,
      enum: ['reggaeton','vallenato','rock','pop','merengue','otro']
    }],
    default : ['otro']
  },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Songs',SongsSchema);
