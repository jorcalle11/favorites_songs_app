var Song = require('../models/model.song');

// GET
function findAllSongs(req,res){
    Song.find(function(err,data){
      if (!err){
        console.log('GET /songs')
        res.json(data);
      }
    })
};


// GET
function findById(req,res){
  var id = req.params.id;
  console.log(id);
  Song.find({'_id':id},function(err,data){
    if(!err){
      console.log('GET /songs/'+req.params.id);
      res.json(data)
    }else{
      res.send('el registro no existe');
      console.log('el registro no existe')
    }
  });
};

// POST
function newSong(req,res){
  var song = new Song(req.body);
  console.log('POST /songs');
  song.save(function(err){
    if (!err){
      res.json(song)
    } else {
      console.log('Error \n',err);
    }
  });
};


// PUT
function updateSong(req,res){
  var id = req.params.id;
  var song = req.body;
  Song.update({'_id':id},{$set:song},function(err,data){
    if(!err){
      console.log("registro acctualizado");
      res.json(song);
    } else{
      console.log('Error \n',err);  
    };
  });
};

// DELETE
function removeSong(req,res){
  var id = req.params.id;
  console.log(id);
  Song.remove({'_id':id},function(err,data){
    if (!err){
      res.json(data);
      console.log('registro eliminado');
    }else{
      console.log('Error \n',err);
    }
  });
};

module.exports = {
  read: findAllSongs,
  create : newSong,
  update: updateSong,
  findById : findById,
  remove: removeSong
};

