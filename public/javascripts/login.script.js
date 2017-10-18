var login = function() {

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  payload = {username: username, password: password};

  $.ajax({
    type: "POST",
    data: payload,
    url: '/login',
    success: function(status){
      document.querySelector('#mainNavigator').resetToPage('main.html');
    },
    error: function(err, xhr) {
      ons.notification.alert('Incorrect username or password.');
    }
  });

};
