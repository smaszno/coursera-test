(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', 'itemData'];
function ItemsController(MenuDataService, itemData) {
  var ctrl = this;
  var data = itemData.data;
  ctrl.items = data.menu_items;
}

})();
