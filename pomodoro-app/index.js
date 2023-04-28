function setTimerToZero() {
  let startingSeconds = "00";
  let StartingMinutes = "00";

  document.getElementById("minuteShowcase").innerHTML = StartingMinutes;
  document.querySelector(".secondsShowcase").innerHTML = startingSeconds;
}

function startTimer() {
  document.querySelector(".done").innerHTML = "";
  sessionMinutes = 24;
  sessionSeconds = 59;

  document.querySelector(".minuteShowcase").innerHTML = sessionMinutes;
  document.querySelector(".secondsShowcase").innerHTML = sessionSeconds;

  let minutesInterval = setInterval(minutesTimer, 60000);
  let secondsInterval = setInterval(secondsTimer, 1000);

  function minutesTimer() {
    sessionMinutes = sessionMinutes - 1;
    document.getElementById("minuteShowcase").innerText = sessionMinutes;
  }
  function secondsTimer() {
    sessionSeconds = sessionSeconds - 1;
    document.querySelector(".secondsShowcase").innerHTML = sessionSeconds;

    if (sessionSeconds <= 0) {
      if (sessionMinutes <= 0) {
        clearInterval(minutesInterval);
        clearInterval(secondsInterval);
        document.querySelector(".done").innerHTML = "Timer Done | Please take a rest!";
      }
      sessionSeconds = 60;
    }
  }
}

function smallBreak() {
  document.querySelector(".done").innerHTML = "";
  sessionMinutes = 4;
  sessionSeconds = 59;

  document.querySelector(".minuteShowcase").innerHTML = sessionMinutes;
  document.querySelector(".secondsShowcase").innerHTML = sessionSeconds;

  var minutesInterval = setInterval(minutesTimer, 60000);
  var secondsInterval = setInterval(secondsTimer, 1000);

  function minutesTimer() {
    sessionMinutes = sessionMinutes - 1;
    document.getElementById("minuteShowcase").innerText = sessionMinutes;
  }
  function secondsTimer() {
    sessionSeconds = sessionSeconds - 1;
    document.querySelector(".secondsShowcase").innerHTML = sessionSeconds;

    if (sessionSeconds <= 0) {
      if (sessionMinutes <= 0) {
        clearInterval(minutesInterval);
        clearInterval(secondsInterval);
        document.querySelector(".done").innerHTML = "Timer Done | Please take a rest!";
      }
      sessionSeconds = 60;
    }
  }
}

function longBreak() {
  document.querySelector(".done").innerHTML = "";
  sessionMinutes = 19;
  sessionSeconds = 59;

  document.querySelector(".minuteShowcase").innerHTML = sessionMinutes;
  document.querySelector(".secondsShowcase").innerHTML = sessionSeconds;

  var minutesInterval = setInterval(minutesTimer, 60000);
  var secondsInterval = setInterval(secondsTimer, 1000);

  function minutesTimer() {
    sessionMinutes = sessionMinutes - 1;
    document.getElementById("minuteShowcase").innerText = sessionMinutes;
  }
  function secondsTimer() {
    sessionSeconds = sessionSeconds - 1;
    document.querySelector(".secondsShowcase").innerHTML = sessionSeconds;

    if (sessionSeconds <= 0) {
      if (sessionMinutes <= 0) {
        clearInterval(minutesInterval);
        clearInterval(secondsInterval);
        document.querySelector(".done").innerHTML = "Timer Done | Please take a rest!";
      }
      sessionSeconds = 60;
    }
  }
}
