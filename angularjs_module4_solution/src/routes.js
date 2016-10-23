(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Categories
  .state('menuCategories', {
    url: '/categories',
    templateUrl: 'src/templates/main-categories.template.html',
    controller: 'CategoriesController as catCtrl',
    resolve: {
      catData: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('menuItems', {
    url: '/items/{catCode}',
    templateUrl: 'src/templates/main-items.template.html',
     controller: 'ItemsController as itemCtrl',
    resolve: {
      itemData: ['MenuDataService',  '$stateParams', function (MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.catCode);
      }]
    }
  });

}

})();
