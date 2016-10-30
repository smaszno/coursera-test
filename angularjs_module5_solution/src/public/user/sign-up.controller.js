(function () {



angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject=['UserService', 'MenuService'];
function SignUpController(UserService, MenuService) {
  var su = this;
  su.dish_invalid = false;
  su.saved = false;
  su.submit = function () {

    var promise = MenuService.getSingleMenuItem(su.user.favourite_dish);

    promise.then(function (response) {
      su.dish_invalid = false;
      su.saved = UserService.createUser(su.user.first_name, su.user.last_name, su.user.email, su.user.phone, response.data);
    }, function(error)
    {
      su.dish_invalid = true;
      su.saved = false;
    });



  };
}

})();
