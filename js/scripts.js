// Business (or back-end) logic:


// User interface (or front-end) logic:
$(document).ready(function(){
  $("formSubmit").submit(function(event){
    event.preventDefault();
    var userChoice1 = parseInt($("#question1").val());
    var userChoice2 = ParseInt($("#question2").val());
    var userChoice3 = parseInt($("#question3").val());
    var userChoice4 = parseInt($("#question4").val());
    var userChoice5 = parseInt($("#question5").val());
    var userTotal = (userChoice1 + userChoice2 + userChoice3 + userChoice4 + userChoice5);

    console.log(userTotal)
    if ()
  });
});
