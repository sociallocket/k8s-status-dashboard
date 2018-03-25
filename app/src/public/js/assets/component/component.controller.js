(function () {

  'use strict';

  angular
    .module('app')
    .controller('ComponentController', ComponentController);

  console.log("ComponentController is in action")
  ComponentController.$inject = ['authService', '$scope', '$http'];

  function ComponentController(authService, $scope, $http) {

    var vm = this;
    vm.auth = authService;
    
    var refresh = function () {
      $http({
        method: 'GET',
        url: '/components',
        headers: {
          'Authorization': "Bearer" + " " + localStorage.id_token
        }
      }).then(function (response) {
          $scope.componentlist = response.data;
          $scope.component = "";
          var parseData = response.data
          var result = [];
          parseData.forEach(function(item) {
            var temp = item.conditions;
            temp.forEach(function (item) {
              result.push(item.type);
            });      
          });
          $scope.statusComponentlist = result;
          $scope.statusComponent = ""; 
      },function (error) {
        console.log('error')
      })

    }
    refresh();
    $scope.title = "Components"
  }   
})();