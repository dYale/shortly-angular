angular.module('shortly.links', [])
//include scope and links into dependecy array

// angular.module('shortly.services')


.controller('LinksController', function ($scope, Links) {
    // angular.extend($scope, Links)
    $scope.data = {};
    $scope.getLinks = function(){
    Links.getLinks()
    .then(function(data){
      // console.log("Getlinks DATATA:",data)
      $scope.data.links = data
      console.log($scope.data.links)
    })
    .catch(function(err){
      console.error(error)
    });
  };

    $scope.getLinks();
});