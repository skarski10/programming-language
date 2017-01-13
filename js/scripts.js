// Business (or back-end) logic:


// User interface (or front-end) logic:
$(document).ready(function() {
  // $("#changeClass").click(function(event) {
  //   event.preventDefault();
  //   $("form").toggleClass(".has-error").addClass("has-success");
  //   console.log("hi")
  // });
  $("#formSubmit").click(function(event) {
    event.preventDefault();
    $(".hide-me").hide();
    var userChoice1 = parseInt($("#question1").val());
    var userChoice2 = parseInt($("#question2").val());
    var userChoice3 = parseInt($("#question3").val());
    var userChoice4 = parseInt($("#question4").val());
    var userChoice5 = parseInt($("#question5").val());
    var userTotal = userChoice1 + userChoice2 + userChoice3 + userChoice4 + userChoice5;

    if (userTotal >= 100) {
      $("#cssUnhide").show();
    } else if (userTotal >= 1 && userTotal <= 9) {
      $("#cUnhide").show();
    } else if (userTotal >= 10 && userTotal <= 14) {
      $("#javaUnhide").show();
    } else if (userTotal >= 15 && userTotal <= 19) {
      $("#phpUnhide").show();
    } else if (userTotal >= 20 && userTotal <= 99) {
      $("#rubyUnhide").show();
    } else {
      alert("Please select an answer for each question");
    }

  });

  $("#buttonRow").click(function(){
    $(this).trigger("https://www.epicodus.com/ruby")
  })
});
