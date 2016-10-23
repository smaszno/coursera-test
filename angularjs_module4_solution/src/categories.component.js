(function () {
'use strict';

angular.module('MenuApp')
.component('menuCategories', {
  templateUrl: 'src/templates/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
