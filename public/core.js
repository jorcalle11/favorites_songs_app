var app = angular.module('songs',[]);

app.controller('mainController',['$scope','$http',mainController]);


function mainController($scope,$http){
  $scope.songs = [];
  $scope.newSong = {};


  $scope.find = function(){
    $http.get('/songs')
          .success(function(data,headers,config, status){
            $scope.songs = data;
          })
          .error(function(err){
            console.log(err);
          });    
  }; 
  $scope.find();

  $scope.create = function(){
    $http.post('/songs',$scope.newSong)
         .success(function(data){
          $scope.newSong = {};
           console.log(data);
           $scope.error = '';
           $scope.find();
         })
        .error(function(err){
          $scope.error = err.message;
          console.log(err.message);
        });
  };

  $scope.remove = function(id){
    $http.delete('/songs/'+id)
         .success(function(data){
          console.log(data);
          $scope.find();
         })
        .error(function(err){
          console.log(err);
        });
  };      
};
