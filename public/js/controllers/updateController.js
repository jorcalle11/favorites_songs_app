angular.module('songsApp')
  .controller('updateController', function ($scope,$http,$routeParams,$location) {
    console.log($routeParams);
    var url = '/song/'+$routeParams.id;
    $scope.findOne = function(){
      $http.get(url)
           .success(function(data){
              console.log(data);
              $scope.editSong = data;  
           })
          .error(function(err){
            console.log(err.message);
            $scope.error = err.message;
          });
    };

    $scope.findOne();

    $scope.update= function(){
      $http.put(url,$scope.editSong)
           .success(function(data){
              console.log(data);
              $location.path('/');
           })
          .error(function(err){
            console.log(err.message);
            $scope.error = err.message;
          });
    };

  });
