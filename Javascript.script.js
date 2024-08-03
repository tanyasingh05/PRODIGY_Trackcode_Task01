console.log("I am the main script file of the sytem");
const stopWatch = document.getElementById("para2");

let milliSeconds = 0;
let minutes = 0;
let seconds = 0;

let intervalId;

let displayMilliSeconds = 0;
let displayMinutes = 0;
let displaySeconds = 0;

function updateTime() {
  milliSeconds = milliSeconds + 1;
  // stopWatch.innerText = milliSeconds;
  if (milliSeconds == 10) {
    seconds = seconds + 1;
    milliSeconds = 0;
  }
  if (seconds == 60) {
    minutes = minutes + 1;
    console.log(minutes);
    seconds = 0;
  }

  if (milliSeconds < 10) {
    displayMilliSeconds = "0" + milliSeconds;
  } else displayMilliSeconds = milliSeconds;

  if (seconds < 10) {
    displaySeconds = "0" + seconds;
  } else displaySeconds = seconds;

  if (minutes < 10) {
    displayMinutes = "0" + minutes;
  } else displayMilliSeconds = milliSeconds;

  stopWatch.innerText = `${displayMinutes}:${displaySeconds}:${displayMilliSeconds}`;
}
function play() {
  console.log("Play");
  intervalId = setInterval(() => {
    updateTime();
  }, 100);
}

function pause() {
  clearInterval(intervalId);
}

function reset() {
  clearInterval(intervalId);
  stopWatch.innerText = "00:00:00";
  milliSeconds = 0;
  seconds = 0;
  minutes = 0;
}
