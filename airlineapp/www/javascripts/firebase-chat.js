var fbchat = {};
var fbchatdb = null;
var usersConnected = 0;
var chatUsersDetails = {};
var socket;
var config = {
  apiKey: "AIzaSyA-QOeXCAvvWkCp2hZCRZtZnOwfUJKGhPY",
  authDomain: "airlineapp-183702.firebaseapp.com",
  databaseURL: "https://airlineapp-183702.firebaseio.com",
  projectId: "airlineapp-183702",
  storageBucket: "airlineapp-183702.appspot.com",
  messagingSenderId: "985537101046"
};
firebase.initializeApp(config);
fbchatdb = firebase.database().ref("/chat-app-public");

// GET RECENT 100 MESSAGES AND LISTEN FOR NEW MESSAGES
fbchat.initChatMessage = function() {
  fbchatdb.limitToLast(100).orderByChild("DateTime").on("child_added", function(snapshot) {
    let msgKey = snapshot.key;
    let msgMeta = snapshot.val();

    let authorKrisNumber = msgMeta.KrisNumber;
    let messageDetail = {
      AuthorFullName: msgMeta.FullName,
      Message: msgMeta.Message,
      MessageTime: moment(msgMeta.DateTime, 'DD-MM-YYYY HH:mm:SSS').format('hh:mm A')
    }

    if(authorKrisNumber == krisFlyerNumber) {
      $("#messageOutTemplate").tmpl(messageDetail).appendTo("#ChatMessageContainer");
    } else {
      $("#messageInTemplate").tmpl(messageDetail).appendTo("#ChatMessageContainer");
    }

  });
};

fbchat.createWSConnection = function() {
  if(location.protocol == 'https:'){
    socket = new WebSocket("wss://" + "sg-emergency-force.herokuapp.com" + "/airlineapp/chat/");
  }else{
    socket = new WebSocket("ws://" + "sg-emergency-force.herokuapp.com" + "/airlineapp/chat/");
  }

  socket.onopen = function(e) {
    if (krisFlyerNumber == null || userProfile == null) { return; }
    chatUserDetail = {
      krisFlyerNumber: krisFlyerNumber,
      memberSince: userProfile.accountSummary.memberSince,
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      gender: userProfile.gender,
      nationality: userProfile.passport.nationality
    };
    socket.send(JSON.stringify(chatUserDetail));
  }

  socket.onmessage = function(e) {

      var msg = (JSON.parse(e.data));
      switch(msg.type) {
          case "chatUsersDetails":
            chatUsersDetails = msg.chatUsersDetails;
            console.log("users online");
            console.log(chatUsersDetails);
            break;
      }
  };

  // socket.close()
}

// SEND MESSAGES
fbchat.sendmessage = function(sender, krisNumber, chatMsg) {
  let msgdate = moment(new Date()).format('DD-MM-YYYY HH:mm:SSS');
  let message = {
    DateTime: msgdate,
    FullName: sender,
    KrisNumber: krisNumber,
    Message: chatMsg
  }
  pushedItem = fbchatdb.push(message);
};

$(document).on('click', '#SendMessageButton', function(event) {
  let msgToSend = $('#SendMessageText').val().trim();
  if (msgToSend == "") { return; }
  if (krisFlyerNumber == null || userProfile == null) { return; }
  fbchat.sendmessage(userProfile.firstName + " " + userProfile.lastName, krisFlyerNumber, msgToSend);
  $('#SendMessageText').val("");
});
