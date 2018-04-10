var config = {
    apiKey: "AIzaSyDKbU64eW1tb5H1zWmlwrKIbU4zafoOr7A",
    authDomain: "train-scheduler-6fc18.firebaseapp.com",
    databaseURL: "https://train-scheduler-6fc18.firebaseio.com",
    projectId: "train-scheduler-6fc18",
    storageBucket: "train-scheduler-6fc18.appspot.com",
    messagingSenderId: "651644091379"
  };
  firebase.initializeApp(config);

  var traindb = firebase.database();

  $("#submit").on("click", function(event){
    event.preventDefault();
    
    var trainName = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var trainTime = $("#trainTime").val().trim();
    var freq = $("#freq").val().trim();

    traindb.ref().push({
        trainName: trainName,
        destination: destination,
        trainTime: trainTime,
        freq: freq

    });



 });  


