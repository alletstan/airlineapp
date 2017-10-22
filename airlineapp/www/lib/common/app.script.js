$.ajaxPrefilter( function (options) {
  if (options.crossDomain && jQuery.support.cors) {
    var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    //options.url = "http://cors.corsproxy.io/url=" + options.url;
  }
});

var krisFlyerNumber = null;
var userProfile = null;

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

  if(krisFlyerNumber != null) {
    document.querySelector('#mainNavigator').resetToPage('main.html');
  }

}
login.tryLogin = function() {
  let enteredKrisNumber = String(document.getElementById('username').value);
  let payload = "{\n  \"request\": {\n    \"krisflyerNumber\": \"" + enteredKrisNumber + "\"\n  },\n  \"clientUUID\": \"<ChangeThis: AnyUniqueStringForYourTeam>\"\n}"

  $.ajax({
    method: "POST",
    data: payload,
    dataType: 'json',
    headers: {
      "content-type": "application/json",
      "x-api-key": "du1yO8KLZm9PfFeg6OHQW8CFcpK1RMym3JXp78Uk",
      "cache-control": "no-cache",
      "postman-token": "12347e3a-c45f-ed6a-6290-c2d9648c7b59"
    },
    crossDomain: true,
    url: "https://apidev.singaporeair.com/appchallenge/krisflyer/getprofile",
    success: function(data, status){
      krisFlyerNumber = enteredKrisNumber;
      userProfile = data.response;
      document.querySelector('#mainNavigator').resetToPage('main.html');
    },
    error: function(err, xhr) {
      console.log(err);
      ons.notification.alert('Invalid kris flyer account number.');
    }
  });
};

var logout = function() {

  krisFlyerNumber = null;
  userProfile = null;
  document.querySelector('#mainNavigator').resetToPage('login.html', {});

};
