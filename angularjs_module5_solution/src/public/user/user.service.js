(function () {
"use strict";

angular.module('public')
.service('UserService', UserService);



function UserService() {
  var service = this;
  var userData = null;

  service.createUser = function(first_name, last_name, email, phone, favourite_dish)
  {
    var user =
    {
      'first_name' : first_name,
      'last_name' : last_name,
      'email' : email,
      'phone' : phone,
      'favourite_dish' : favourite_dish
    };
    userData = user;
    return true;
  }

  service.getUser = function ()
  {
    return userData;
  }


}



})();
