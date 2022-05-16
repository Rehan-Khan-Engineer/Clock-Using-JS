const startButton = document.getElementById("start-btn");

const stopButton = document.getElementById("stop-btn");

startButton.addEventListener("click", getTime);

stopButton.addEventListener("click", stopTime);

let stopClock = null;

function getTime() {
  const getFormat = document.getElementById("selectBox");
  const time = new Date();

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let session = "AM";

  minutes = addZero(minutes);
  seconds = addZero(seconds);

  if (getFormat.options[getFormat.selectedIndex].value === "12 Hour clock") {
    if (hours === 0) {
      hours = 12;
    }

    if (hours > 12) {
      hours = hours - 12;
      session = "PM";
    }

    console.log("working for 12 format");
  } else if (
    getFormat.options[getFormat.selectedIndex].value === "24 Hour clock"
  ) {
    if (hours > 12) {
      session = "PM";
    }

    console.log("working for 24 format");
  }

  const getClock = document.getElementById("clock");
  getClock.style.display = "block";
  getClock.innerHTML = `⌚ ${hours} : ${minutes} : ${seconds} ${session}`;

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
