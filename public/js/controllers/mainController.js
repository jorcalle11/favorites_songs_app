angular.module('songsApp')
  .controller('mainController',function ($scope,$http,$location) {
  $scope.songs = [];
    $scope.find = function(){
      $http.get('/songs')
            .success(function(data,headers,config, status){
              $scope.datos = true;
              $scope.songs = data;
            })
            .error(function(err){
              console.log(err);
            });    
    }; 
    $scope.find(); 

    $scope.remove = function(id){
      $http.delete('/song/'+id)
           .success(function(data){
            console.log(data);
            $scope.find();
           })
          .error(function(err){
            console.log(err);
          });
    };

    $scope.update = function(id){
     $location.path('/song/'+id);
    };

    $scope.ordenar = function(valor){
      if ($scope.orden == valor){
        $scope.orden = '-'+valor;
      } else {
        $scope.orden = valor;
      }
    };

    $scope.ocultar = function(){
      if ($scope.songs.length > 0){
        return true;
      }
      return false;
    };

  });
