'use strict';


// Declare app level module which depends on filters, and services
var module=angular.module('easycard', [
  'ngRoute',
  'easycard.controllers'
]);
module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/lista', {templateUrl: 'partials/lista.html', controller: 'listaCtrl'});
  $routeProvider.otherwise({redirectTo: '/lista'}); 
}]);