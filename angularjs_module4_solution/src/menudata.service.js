(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('MenuAPIUrl', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'MenuAPIUrl']
function MenuDataService($http, MenuAPIUrl) {
  var srv = this;

  srv.getAllCategories = function ()
  {
       var response =  $http ({
         method: "GET",
         url: (MenuAPIUrl + "/categories.json")
       });
       return response;
  }

  srv.getItemsForCategory = function (categoryShortName)
  {
       var response =  $http({
         method: "GET",
         url: (MenuAPIUrl + "/menu_items.json"),
         params:
         {
           category: categoryShortName
         }
       });
       return response;
  }


}

})();
