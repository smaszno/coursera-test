//IFFE
(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  // making URL a constant, just in case if someone wanted to change it, so he would not need to look further into code
  // however, the new URL should return the same JSON structure ("menu_items" array of menu items :) )
  .constant('MenuItemsURL', "https://davids-restaurant.herokuapp.com/menu_items.json")
  // and now directive
  .directive('foundItems', FoundItemsDirective);

// directive, restricted to element
  function FoundItemsDirective() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'foundItems.html',
      scope: {
        fndItems: '<',
        onRemove: '&'
      }
    };
    return ddo;
  }




// Protection from minification
   NarrowItDownController.$inject=['MenuSearchService'];
  function NarrowItDownController(MenuSearchService)
  {
    var nDownCtrl = this;
    // initialization to null, so when there is no data, there is no "Nothing found!" message
    nDownCtrl.found = null;

    nDownCtrl.getMatchedMenuItems = function ()
    {
      var promise = MenuSearchService.getMatchedMenuItems(nDownCtrl.searchTerm);
      promise.then(function (items)
      {
// fill the found array (items can be an empty array, but it will not be equal to null)
          nDownCtrl.found = items;
      })
      .catch(function (error) {
// log error
        console.log(error);
      }) ;
    }


    nDownCtrl.removeItem = function(index)
    {
      // remove item - since remove button depends on items from found array, there is no need to detect nulls or index out of bounds
      nDownCtrl.found.splice(index, 1);
    }
  }

// Protection from minification - again
 MenuSearchService.$inject=['$http', '$filter', 'MenuItemsURL'];
  function MenuSearchService($http, $filter, MenuItemsURL)
  {
    var msSrv = this;
// gets items and filters according to searchTerm
    msSrv.getMatchedMenuItems = function(searchTerm)
    {
      return downloadFromServer().
      then(function (response) {
        var foundItems = [];
// get response data item
        var resp = response.data;
// iterate through menu_items array
        for (var index = 0; index < resp.menu_items.length; index++)
        {
          var item = resp.menu_items[index];
// get description
          var desc = item.description;
// and check it - IMPORTANT - I am checking all occurences of the searchTerm, independent of the case (i.e. Chicken, CHICKEN, chicken should give the same results)
          if (angular.isDefined(desc) && desc != null && $filter('lowercase')(desc).indexOf($filter('lowercase')(searchTerm)) >= 0)
          {
            foundItems.push(item);
          }
        }
        return foundItems;
      })

    }

// gets all items from the URL (I like it separate, it is a different functionality)
    function downloadFromServer()
    {
      var response = $http({
        method: "GET",
        url: (MenuItemsURL)
      });
      return response;
    }

  }


})();
