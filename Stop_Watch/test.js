const stopWatch = document.getElementById("stopWatch");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const milisecondTag = document.getElementById("milisecondTag");
let milisecond = 0,
  second = 0,
  minute = 0,
  hour = 0;

stopWatch.classList.add("user-select-none");

const startingStatus = () => {
  milisecond++;
  if (milisecond === 1000) {
    milisecond = 0;
    second++;
    if (second === 60) {
      second = 0;
      minute++;
      if (minute === 60) {
        minute = 0;
        hour++;
      }
    }
  }

  const secondText = second < 10 ? "0" + second.toString() : second;
  const minuteText = minute < 10 ? "0" + minute.toString() : minute;
  const hourText = hour < 10 ? "0" + hour.toString() : hour;

  if (milisecond < 10) {
    milisecondText = "00" + milisecond.toString();
    milisecondTag.textContent = milisecondText;
  } else if (milisecond < 100) {
    milisecondText = "0" + milisecond.toString();
    milisecondTag.textContent = milisecondText;
    console.log(milisecondText);
  } else {
    milisecondTag.textContent = milisecond.toString();
  }
  stopWatch.textContent = hourText + ":" + minuteText + ":" + secondText;
};

let interValId;
let status = true;
startBtn.addEventListener("click", () => {
  if (status) {
    interValId = setInterval(startingStatus, 1);
    status = false;
  }
});

pauseBtn.addEventListener("click", () => {
  clearInterval(interValId);
  status = true;
});

resetBtn.addEventListener("click", () => {
  clearInterval(interValId);
  stopWatch.textContent = "00:00:00";
  milisecondTag.textContent = "000";
  (milisecond = 0), (second = 0), (minute = 0), (hour = 0);
  status = true;
});
