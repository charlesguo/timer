var resetButton = document.getElementById("reset");
var startButton = document.getElementById("start");
var pauseButton = document.getElementById("pause");
var intervalId;
var seconds = 0;
var timerId;


resetButton.addEventListener("click", function() {
  // use clearInterval to stop the timer
  clearInterval(intervalId);

  // reset the timer
  seconds = 0;

  // restore the HTML in the header
  document.getElementById("timer").innerHTML = "Stop Watch";

});


startButton.addEventListener("click", function() {
  intervalId = setInterval( function() {
    updateTime()
  }, 1000 );
});

pauseButton.addEventListener("click", function() {
  // use clearInterval to stop but not reset the timer
  clearInterval(intervalId);
});



function updateTime() {
  seconds ++;
  document.getElementById("timer").innerHTML = "Time Elapsed: " + seconds;
}
