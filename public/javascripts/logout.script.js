var logout = function() {

  $.ajax({
    type: "GET",
    url: '/logout',
    success: function(status){
      window.location = "/";
    },
    error: function(err, xhr) {
      console.log(err);
    }
  });

};
