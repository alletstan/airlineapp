$(document).ready(function() {
  GoToMainIfLogin();
});

var GoToMainIfLogin = function(){

  $.ajax({
    type: "GET",
    url: '/api/checkiflogin',
    success: function(data, status){
      if(data.islogin){
        document.querySelector('#mainNavigator').resetToPage('main.html');
      }
    },
    error: function(err, xhr) {
      console.log(err);
    }
  });

}

var login = function() {

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  payload = {username: username, password: password};

  $.ajax({
    type: "POST",
    data: payload,
    url: '/api/login',
    success: function(status){
      document.querySelector('#mainNavigator').resetToPage('main.html');
    },
    error: function(err, xhr) {
      ons.notification.alert('Incorrect username or password.');
    }
  });

};
