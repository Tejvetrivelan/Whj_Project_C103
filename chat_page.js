
const firebaseConfig = {
    apiKey: "AIzaSyASoVHF7h6_kfv7Eu4Nt-PBZgyRZQmWpfw",
    authDomain: "c100-let-s-chat-app.firebaseapp.com",
    databaseURL: "https://c100-let-s-chat-app-default-rtdb.firebaseio.com",
    projectId: "c100-let-s-chat-app",
    storageBucket: "c100-let-s-chat-app.appspot.com",
    messagingSenderId: "549419092129",
    appId: "1:549419092129:web:30c12f5458a34872bb48e0",
    measurementId: "G-JLY0QRH1E4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




room_name = localStorage.getItem("user_name");

user_name = localStorage.getItem("user_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
       like:0
})

      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
         like:0
      })
      document.getElementById("msg").value = "";
}