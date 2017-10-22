var fbchat = {};
var fbchatdb = null;
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
// fbchatdb.orderByChild("DateTime").limitToLast(100).on("child_added", function(snapshot) {
//   let msgKey = snapshot.key;
//   let msgMeta = snapshot.val();
//
// });

// SEND MESSAGES
fbchat.sendmessage = function(sender, krisNumber, chatMsg) {
  let msgdate = moment(new Date()).format('DD-MM-YYYY hh:mm:ss');
  let message = {
    DateTime: msgdate,
    FullName: sender,
    KrisNumber: krisNumber,
    Message: chatMsg
  }
  fbchatdb.push(message);
}
