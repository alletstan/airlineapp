var login = function() {

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'a' && password === 'a') {
    // set session
    document.querySelector('#mainNavigator').pushPage('main.html');
  }
  else {
    ons.notification.alert('Incorrect username or password.');
  }
};
