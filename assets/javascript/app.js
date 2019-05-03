//funtion to yeild results and change containers/views
function calculateTotal() {
  $(".btn2").hide();
  $(".testcont").hide();
  $(".testcont2").show();
  // console.log($('form').serializeArray())
  var quizresults = $('form').serializeArray();
  var finalscore = 0
  var incorrectquest = 0
  for (var i=0; i < quizresults.length; i++) {
    if(quizresults[i].value === "True") {
      finalscore++
    }
    else {
      incorrectquest++
    }
  }
  // print final score 
  $("#finalresults").text("Total Correct:" + " " +finalscore + "/5")
  $("#wrongquestion").text("Total Inorrect:" + " " +incorrectquest + "/5")
}

// Start Button and Hide
$(document).ready(function(){
var counter
  $(".testcont").hide();
  $(".testcont2").hide();
  $(".btn2").click(function(){
    $(".testcont").show();
    $(".btn2").hide();
    // set the countdown
    // on click start timer to count down 30 seconds  
    var countdown=35;
    counter=setInterval(timer, 1000);
    // the counter interval will run every 1 sec/1000ms

    // function will remove -1 each second
    function timer() {
        countdown=countdown-1;
        if (countdown < 0){
            clearInterval(counter);
            alert("TIMES UP!");
            calculateTotal();
            return;
        }
        $("#timer").text(countdown);

    }
    //call the function
    timer();

    $(".btn3").click(function(){
      clearInterval(counter);
      calculateTotal();
    })
  });
});

//submit click button
// $(document).ready(function(){
//   // $(".btn3").click(function(){
//   //   clearInterval(counter);
//   //   $(".btn2").hide();
//   //   $(".testcont").hide();
//   //   $(".testcont2").show();
//   //   // console.log($('form').serializeArray())
//   //   var quizresults = $('form').serializeArray();
//   //   var finalscore = 0
//   //   for (var i=0; i < quizresults.length; i++) {
//   //     console.log(quizresults[i].value)
//   //     if(quizresults[i].value === "True") {
//   //       finalscore++
//   //     }
//   //   }
//   //   // print final score 
//   //   $("#finalresults").text(finalscore)
//   //   //this is where I need to review my questions, check results and yeild the score
//   //   // function check(){
      
//   //   // }
//   //   // $(input[type=radio]).on('change'), function() {

//   //   // }
//   // })
// })

// when the timer ends alert you lost show score, clear all selected, and reset timer
