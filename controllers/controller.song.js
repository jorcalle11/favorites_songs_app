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
  Song.findById(id,function(err,data){
    if(!err){
      res.json(data)
    }else{
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
  Song.findOne(id,function(err,data){
    data = req.body;

    data.save(function(err,song){
      if (!err){
        res.json(song)
        console.log('registro actualizado');
      } else{
        console.log('Error \n',err);
      }
    });
  });

};

// DELETE
function removeSong(req,res){
  var id = req.params.id;
  Song.findOne(id,function(err,data){
    data.remove(function(err){
      if (!err){
        console.log('registro eliminado');
      } else{
        console.log('Error \n',err);
      }
    });
  });
};

module.exports = {
  read: findAllSongs,
  create : newSong,
  update: updateSong,
  findById : findById,
  remove: removeSong
};

