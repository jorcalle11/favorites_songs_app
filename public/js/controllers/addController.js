angular.module('songsApp')
  .controller('addController', function ($scope,$http,$location) {
    $scope.newSong = {genre:'Otro'};
    $scope.create = function(){
      $http.post('/songs',$scope.newSong)
           .success(function(data){
            $scope.newSong = {};
             console.log(data);
             $scope.error = '';
             $location.path('/');
           })
          .error(function(err){
            console.log(err.message);
            $scope.error = err.message;
          });
    };
  });
