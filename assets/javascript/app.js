//doc ready function, allows doc to fully load before running javascript
$(document).ready(function() {
  // start button hides after onclick in run
  $("#start-button").on("click", function() {
    console.log("clicked");
    $(this).hide();

    timer();
    console.log(timeCount);
  });

  var timeCount = 40;
  var intervalId = setInterval(timer, 1000);
  function timer() {
    timeCount--;
    $("#timer").html("Time Remaining: " + timeCount);
  }
});
