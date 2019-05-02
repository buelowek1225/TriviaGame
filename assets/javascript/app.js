// Start Button and Hide
$(document).ready(function(){
    $(".btn1").click(function(){
      $(".testcont").hide();
    });
    $(".btn2").click(function(){
      $(".testcont").show();
      // set the countdown
      // on click start timer to count down 30 seconds  
      var countdown=30;

        // the counter interval will run every 1 sec/1000ms
        var counter=setInterval(timer, 1000);

        // function will remove -1 each secont
        function timer() {
            countdown=countdown-1;
            if (countdown < 0){
                clearInterval(counter);
                alert("TIMES UP!");
                return;
            }
            $("#timer").text(countdown);

        }

        //call the function
        timer();

        console.log(countdown);
    });
  });


// when the timer ends alert you lost show score, clear all selected, and reset timer

// on click "submit", check results, post results, and 
$("#finalresults").text()

