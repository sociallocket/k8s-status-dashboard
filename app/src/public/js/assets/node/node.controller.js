(function () {

  'use strict';

  angular
    .module('app')
    .controller('NodeController', NodeController);

  console.log("NodeController is in action")
  NodeController.$inject = ['authService', '$scope', '$http'];

  function NodeController(authService, $scope, $http) {

    var vm = this;
    vm.auth = authService;
    
    var refresh = function () {
      $http({
        method: 'GET',
        url: '/nodes',
        headers: {
          'Authorization': "Bearer" + " " + localStorage.id_token
        }
      }).then(function (response) {
          $scope.nodelist = response.data;
          $scope.nodes = "";
      },function (error) {
        console.log('error')
      })

    }
    refresh();

    $scope.title = "Nodes"
  } 
})();