(function () {

  'use strict';

  angular
    .module('app')
    .controller('ClusterController', ClusterController);

  console.log("ClusterController is in action")
  ClusterController.$inject = ['authService', '$scope', '$http'];

  function ClusterController(authService, $scope, $http) {

    var vm = this;
    vm.auth = authService;
    
    var refresh = function () {
      $http({
        method: 'GET',
        url: '/cluster',
        headers: {
          'Authorization': "Bearer" + " " + localStorage.id_token
        }
      }).then(function (response) {
          // console.log('I got the data I requested');       
          // console.log(response.data)
          $scope.clusterlist = response.data;
          $scope.cluster = "";
      },function (error) {
        console.log('error')
      })

    }
    refresh();

    $scope.title = "Cluster"
  }    
})();