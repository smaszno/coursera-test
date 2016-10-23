(function () {
'use strict';

angular.module('MenuApp')
.component('menuItems', {
  templateUrl: 'src/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
