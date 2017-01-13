// Business (or back-end) logic:


// User interface (or front-end) logic:
$(document).ready(function(){
  $("formSubmit").submit(function(event){
    event.preventDefault();
    var userChoice1 = $("#question1").val();
    var userChoice2 = $("#question2").val();
    var userChoice3 = $("#question3").val();
    var userChoice4 = $("#question4").val();
    var userChoice5 = $("#question5").val();
  })
});
