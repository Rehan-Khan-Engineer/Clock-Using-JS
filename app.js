startButton = document.getElementById("start-btn");

stopButton = document.getElementById("stop-btn");

startButton.addEventListener("click", getTime);

stopButton.addEventListener("click", stopTime);

let stopClock = null;

function getTime() {
  const time = new Date();

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  minutes = addZero(minutes);
  seconds = addZero(seconds);

  const getClock = document.getElementById("clock");
  getClock.style.display = "block";
  getClock.innerHTML = `⌚ ${hours} : ${minutes} : ${seconds}`;

  stopClock = setTimeout(getTime, 1000);
}

function stopTime() {
  clearTimeout(stopClock);
}

function addZero(x) {
  if (x < 10) {
    x = "0" + x;
  }
  return x;
}
