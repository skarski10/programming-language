// Business (or back-end) logic:


// User interface (or front-end) logic:
$(document).ready(function() {
  $("#formSubmit").click(function(event) {
    event.preventDefault();
    $(".hide-me").hide();
    var userChoice1 = parseInt($("#question1").val());
    var userChoice2 = parseInt($("#question2").val());
    var userChoice3 = parseInt($("#question3").val());
    var userChoice4 = parseInt($("#question4").val());
    var userChoice5 = parseInt($("#question5").val());
    var userTotal = userChoice1 + userChoice2 + userChoice3 + userChoice4 + userChoice5;

    console.log(userTotal)
    if (userTotal >= 500) {
      $("#cssUnhide").show();
    } else if (userTotal >= 1 && userTotal <= 15) {
      $("#cUnhide").show();
    } else if (userTotal >= 16 && userTotal <= 25) {
      $("#javaUnhide").show();
    } else if (userTotal >= 26 && userTotal <= 35) {
      $("#phpUnhide").show();
    } else if (userTotal >= 36 && userTotal <= 499) {
      $("#rubyUnhide").show();
    } else {
      alert("Please select an answer for each question");
    }

  });
});
