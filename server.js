var express = require('express'), mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),   
    morgan = require('morgan'),
    path = require('path'),
    config = require('./config'),
    route = require('./routes/route.song'),
    app = express();

//conexion a la base de datos 
mongoose.connect(config.url, function(err){
  if (err){
    console.log('error al conectarse a la base de datos \n',err);
  }   
});
//milddleware 
app.use(morgan('dev'));
app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));

//rutas
route(app);

//arrancar el servidor 
app.listen(config.port,function(){
  console.log('server running and listening at http://%s:%s', config.host, config.port);
});
