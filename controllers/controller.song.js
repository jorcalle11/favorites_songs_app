var Song = require('../models/model.song');

// GET
function findAllSongs(req,res){
    Song.find(function(err,data){
      if (!err){
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
  song.save(function(err,data){
    if (!err){
      res.json(data)
    } else {
      console.log('problemas al crear un song');
    }
  });
};


// PUT
function updateSong(req,res){
  var id = req.params.id;
  Song.update({'_id':id},{$set:req.body},function(err,data){
    if(!err){
      console.log("registro acctualizado");

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

