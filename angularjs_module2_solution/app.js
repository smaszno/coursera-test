//IFFE
(function () {
  'use strict';

  angular.module("ShoppingListCheckOff", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

// Protection from minification
  ToBuyController.$inject= ['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

  // controller for to buy list
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyCtrl = this;


    toBuyCtrl.items = ShoppingListCheckOffService.getToBuyItems();

    toBuyCtrl.buyItem = function(itemIndex)
    {
      ShoppingListCheckOffService.buyItem(itemIndex);
    }
  }

// controller for already bought list
  function AlreadyBoughtController(ShoppingListCheckOffService)
  {
    var alreadyBoughtCtrl = this;
    alreadyBoughtCtrl.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
  }

// service for both controllers
  function ShoppingListCheckOffService()
  {
    var service = this;

    // populating to buy list
    var toBuyItems = [
      { name: "nails", quantity: "5000" }, { name: "hammers", quantity: "5" },
      { name: "wooden beams", quantity: "10" }, { name: "wooden planks", quantity: "30" },
      { name: "cardboards", quantity: "40" }
    ];

    // bought list is empty
    var boughtItems = [];

    // returns all items from to buy list
    service.getToBuyItems = function ()
    {
      return toBuyItems;
    }

    // returns all items from already bought list
    service.getAlreadyBoughtItems = function ()
    {
      return boughtItems;
    }

    // buying an item
    service.buyItem = function (index)
    {
      // get item from to buy, put it in bought
      // splice returns an Array, so the first element is pushed to boughtItems.
      boughtItems.push(toBuyItems.splice(index, 1)[0]);
    }
  }


})();
