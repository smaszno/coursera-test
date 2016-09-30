(function () {
  'use strict';

  angular.module('LunchChecker', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject= ['$scope'];

  function LunchCheckController($scope) {

    $scope.checkIfTooMuch = function () {

      var mesg = "Please enter data first";
      if (!angular.isUndefined($scope.lunch_menu) && $scope.lunch_menu.length > 0)
      {
        var arrayOfItems = $scope.lunch_menu.split(',');
        var itemCnt = 0;
        for (var i = 0; i < arrayOfItems.length; i++) {
          if (arrayOfItems[i] != '')
          {
            itemCnt++;
          }
        }
        if (itemCnt > 0)
        {
          mesg = "Enjoy!";
        }
        if (itemCnt> 3)
        {
          mesg = "Too much!";
        }

      }
      $scope.msg = mesg;
    }
  }

})();
