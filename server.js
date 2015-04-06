var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
    config = require('./config'),
    route = require('./routes/route.song')
    app = express();

//conexion a la base de datos 
mongoose.connect('mongodb://localhost/'+config.db, function(err){
  if (err){
    console.log('error al conectarse a la base de datos \n',err);
  }   
});
app.use(bodyParser.urlencoded({ extended: false }))
//rotas
route(app);

//arrancar el servidor 
app.listen(config.port,function(){
  console.log('server running and listening at http://%s:%s', config.host, config.port);
})
