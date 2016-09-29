(function () {
  'use strict';

  angular.module('LunchChecker', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject= ['$scope'];

  function LunchCheckController($scope) {

    $scope.checkIfTooMuch = function () {

      var lunchmenu = $scope.lunch_menu;
      if (typeof lunchmenu === "undefined" || lunchmenu.length == 0)
      {
        $scope.msg = "Please enter data first";
        return;
      }
      var arrayOfItems = $scope.lunch_menu.split(',');
      var itemCnt = 0;
      for (var i = 0; i < arrayOfItems.length; i++) {
        if (arrayOfItems[i] != '')
        {
          itemCnt++;
        }
      }
      if (itemCnt == 0)
      {
        $scope.msg = "Please enter data first";
      }
      else if (itemCnt> 3)
      {
        $scope.msg = "Too much!";
      }
      else  {
        $scope.msg = "Enjoy!";
      }


    }
  }

})();
