(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService', 'catData'];
function CategoriesController(MenuDataService, catData) {
  var ctrl = this;
  ctrl.categories = catData.data;

}

})();
