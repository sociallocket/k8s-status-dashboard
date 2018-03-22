(function () {

  'use strict';

  angular
    .module('app', ['auth0.auth0', 'ui.router', 'angular-jwt'])
    .config(config);

  config.$inject = [
    '$stateProvider',
    '$locationProvider',
    '$urlRouterProvider',
    'angularAuth0Provider',
    '$httpProvider',
    'jwtInterceptorProvider'
  ];

  function config(
    $stateProvider,
    $locationProvider,
    $urlRouterProvider,
    angularAuth0Provider,
    $httpProvider,
    jwtInterceptorProvider
  ) {

    jwtInterceptorProvider.tokenGetter = function(store) {
      return store.get('id_token');
    }

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeController',
        templateUrl: 'js/assets/home/home.html',
        controllerAs: 'vm'
      })
      .state('cluster', {
        url: '/cluster',
        controller: 'ClusterController',
        templateUrl: 'js/assets/cluster/cluster.html',
        controllerAs: 'vm'
      })
      .state('components', {
        url: '/components',
        controller: 'ComponentController',
        templateUrl: 'js/assets/component/component.html',
        controllerAs: 'vm'
      })
      .state('nodes', {
        url: '/nodes',
        controller: 'NodeController',
        templateUrl: 'js/assets/node/node.html',
        controllerAs: 'vm'
      })  
      .state('namespaces', {
        url: '/namespaces',
        controller: 'NamespaceController',
        templateUrl: 'js/assets/namespace/namespace.html',
        controllerAs: 'vm'
      })        
      .state('contact', {
        url: '/contact',
        controller: 'ContactController',
        templateUrl: 'js/assets/contact/contact.html',
        controllerAs: 'vm'
      })
      .state('callback', {
        url: '/callback',
        controller: 'CallbackController',
        templateUrl: 'js/assets/callback/callback.html',
        controllerAs: 'vm'
      });;

    // Initialization for the angular-auth0 library
    angularAuth0Provider.init({
      clientID: AUTH0_CLIENT_ID,
      domain: AUTH0_DOMAIN,
      responseType: 'token id_token',
      audience: 'https://' + AUTH0_DOMAIN + '/userinfo',
      redirectUri: AUTH0_CALLBACK_URL,
      scope: 'openid'
    });

    $urlRouterProvider.otherwise('/');

    $locationProvider.hashPrefix('');

    /// Comment out the line below to run the app
    // without HTML5 mode (will use hashes in routes)
    $locationProvider.html5Mode(true);
  }

})();
