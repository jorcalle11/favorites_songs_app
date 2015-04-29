var mongoose = require('mongoose'),
    validate = require('mongoose-validate'),
    Schema = mongoose.Schema;

var SongsSchema = new Schema({
  title: {type: String, required: 'Por favor ingresa el titulo de la cancion' },
  author: {type: String, required: 'Por favor ingresa el autor' },
  genre: { type: [{ type: String, enum: ['Reggaeton','Vallenato','Rock','Pop','Merengue','Otro']}],
    default : ['Otro']
  },
  duration: {type: String, required: 'Por favor ingresa la duracion de la cancion' },
  date: { type: Date }
});



module.exports = mongoose.model('Songs',SongsSchema);
