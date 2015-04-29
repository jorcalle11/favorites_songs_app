var Song = require('../models/model.song');
    errorHandler = require('./errors');

//index
function index(req,res){
  res.sendFile('./public/index');
}

// GET
function findAllSongs(req,res){
    Song.find(function(err,data){
      if (!err){
        console.log('GET /songs');
        res.json(data);
      }else{
        res.statusCode = 500;
        console.log('Internal error(%d): %s',res.statusCode,err.message);
        return res.send({ error: 'Server error' });
      }
    });
};


// GET
function findById(req,res){
  var id = req.params.id;
  Song.findById(id,function(err,data){
    if(!err){
      console.log('GET /song/'+id);
      res.json(data);
    }else{
       return res.status(400).send({
        message: 'No found'
      });
    }
  });
};

// POST
function newSong(req,res){
  var song = new Song(req.body);
  console.log('POST /songs');
  //console.log(song);
  song.save(function(err){
    if (!err){
      res.json(song);
    } else {
        return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    }
  });
};


// PUT
function updateSong(req,res){
  var id = req.params.id;
  var song = req.body;
  Song.update({'_id':id},{$set:song},function(err,data){
    if(!err){
      console.log('PUT /song/'+id);
      console.log("registro actualizado");
      res.json(song);
    } else{
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
    };
  });
};

// DELETE
function removeSong(req,res){
  var id = req.params.id;
  Song.remove({'_id':id},function(err,data){
    if (!err){
      res.json(data);
      console.log('DELETE /song/'+id);
      console.log('registro eliminado');
    }else{
       return res.status(400).send({
        message: 'No found'
      });
    }
  });
};

module.exports = {
  index: index,
  read: findAllSongs,
  create : newSong,
  update: updateSong,
  findById : findById,
  remove: removeSong
};

