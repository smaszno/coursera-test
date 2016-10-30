(function() {
"use strict";

// changed api path to my own server (smaszno-angularjs-course5.herokuapp.com)
angular.module('common', [])
.constant('ApiPath', 'https://smaszno-angularjs-course5.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
