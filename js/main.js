(function() {
  if ($('#new-contact').length > 0) {
    contactScript('forcontact');
  }

  function contactScript(value) {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCJ_aB6KdLpKjhLe29dABClw8_PtD_uSDg",
      authDomain: "test-67717.firebaseapp.com",
      databaseURL: "https://test-67717.firebaseio.com",
      projectId: "test-67717",
      storageBucket: "test-67717.appspot.com",
      messagingSenderId: "1008090308069"
    };
    firebase.initializeApp(config);
    var db = firebase.database().ref("email");

    $("#new-contact").submit(function(config) {
      $(this), console.log("Submit to Firebase");
      var email = document.getElementById("email").value;
      return db.push(email).then(function(config) {
        $(".success").show(800),
          $(".success-none").css("display", "none")
      }), !1
    });
  }
})();