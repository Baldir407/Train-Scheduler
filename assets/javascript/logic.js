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


traindb.ref().on("child_added", function(snapshot){
    var trainName = snapshot.val().trainName;
    console.log(trainName);

    var destination = snapshot.val().destination;
    console.log(destination);

    var trainTime = snapshot.val().trainTime;
    console.log(trainTime);

    var freq = snapshot.val().freq;
    console.log(freq);
    
    var trainTimeConverted = moment(trainTime, "HH:mm").subtract(1, "years");
    console.log(trainTimeConverted);

    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    var diffTime = moment(trainTimeConverted).diff(moment(nextArrival), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    var tRemain = diffTime % freq;
    console.log(tRemain);

    var minAway = freq - tRemain;
    console.log("MINUTES TILL TRAIN: " + minAway);

    var nextArrival = moment(currentTime).add(minAway, "minutes").format("hh:mm");
    console.log("ARRIVAL TIME: " + moment(nextArrival).format("hh:mm"));

    var tr = document.createElement('tr');
    tr.className = "text-center";
    console.log(tr);
    tr.innerHTML = `<td>${trainName}</td>
                    <td>${destination}</td>
                    <td>${freq}</td>
                    <td>${nextArrival}</td>
                    <td>${minAway}</td>`;

            $(".trainDataTable").append(tr);



})