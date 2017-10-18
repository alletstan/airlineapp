window.fn = {};
window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};
window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page).then(menu.close.bind(menu));
};

var login = {};
login.goToMainIfAuthenticated = function() {
  $.ajax({
    type: "GET",
    url: 'http://localhost:3000/api/checkiflogin',
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
login.tryLogin = function() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  payload = {username: username, password: password};
  $.ajax({
    type: "POST",
    data: payload,
    url: 'http://localhost:3000/api/login',
    success: function(status){
      document.querySelector('#mainNavigator').resetToPage('main.html');
    },
    error: function(err, xhr) {
      ons.notification.alert('Incorrect username or password.');
    }
  });
};

var logout = function() {
  $.ajax({
    type: "GET",
    url: 'http://localhost:3000/api/logout',
    success: function(status){
      document.querySelector('#mainNavigator').resetToPage('login.html', {});
    },
    error: function(err, xhr) {
      console.log(err);
    }
  });
};
