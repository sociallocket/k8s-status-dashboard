(function () {

  'use strict';

  angular
    .module('app')
    .controller('NamespaceController', NamespaceController);

  console.log("NamespaceController is in action")
  NamespaceController.$inject = ['authService', '$scope', '$http'];

  function NamespaceController(authService, $scope, $http) {
  
    var vm = this;
    vm.auth = authService;
    
    var refresh = function () {
      $http({
        method: 'GET',
        url: '/namespaces',
        headers: {
          'Authorization': "Bearer" + " " + localStorage.id_token
        }
      }).then(function (response) {
          $scope.namespacelist = response.data;
          $scope.namespaces = "";
      },function (error) {
        console.log('error')
      })

    }
    refresh();

    $scope.title = "Namespace"
  }    
})();