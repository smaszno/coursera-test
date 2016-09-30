//IFFE
(function () {
  'use strict';

  angular.module('LunchChecker', [])

  .controller('LunchCheckController', LunchCheckController);
// Protection from minification
  LunchCheckController.$inject= ['$scope'];

  function LunchCheckController($scope) {

    $scope.checkIfTooMuch = function () {
// Setting default message for empty string
      var mesg = "Please enter data first";
// Checking if string is empty or undefined (until someone types something in the text box, the value of lunch_menu is undefined)
      if (!angular.isUndefined($scope.lunch_menu) && $scope.lunch_menu.length > 0)
      {
// Splitting
        var arrayOfItems = $scope.lunch_menu.split(',');
        var itemCnt = 0;
// Counting, only non empty
        for (var i = 0; i < arrayOfItems.length; i++) {
          var trimmed = arrayOfItems[i].trim();
          if (trimmed != '')
          {
            itemCnt++;
          }
        }
// Enjoyable amount
        if (itemCnt > 0)
        {
          mesg = "Enjoy!";
        }
// Definitely too much
        if (itemCnt> 3)
        {
          mesg = "Too much!";
        }

      }
// Set the message
      $scope.msg = mesg;
    }
  }

})();
