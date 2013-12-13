//return an object which you can use to ID the user,
// logged in status
//login/logout is a synchronous

//encapsulate it such that the application doesn't directly access it

window.angular.module('ngff.services.global', [])
  .factory('Global', function() {
    var current_user = window.user;
    debugger;
    return {
      currentUser: function (){
        return current_user;
      },
      isSignedIn: function(){
        return !!current_user;
      }
    };
  });