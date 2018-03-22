(function () {

  'use strict';

  angular
    .module('app')
    .controller('ContactController', ContactController);

  console.log("contactController is in action")
  ContactController.$inject = ['authService'];

  function ContactController(authService) {

    var vm = this;
    vm.auth = authService;

  }

})();