// Select DOM elements for time display
var timeDisplay = document.querySelector("#time");
var hr = document.querySelector("#hr");
var min = document.querySelector("#min");
var sec = document.querySelector("#sec");
var milisec = document.querySelector("#milisec");
var year = document.querySelector("#year");
var dateDisplay = document.querySelector("#date");
var day = document.querySelector("#day");
var date = new Date();
year.innerText = date.getFullYear();
day.innerText = date.toLocaleDateString("en-US", { weekday: "long" });
dateDisplay.innerText = `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`;

// Function to update individual parts of the clock
function updateClock(time, strr) {
  switch (strr) {
    // Update hours with leading zero
    case "hr":
      hr.innerText = time < 10 ? `0${time}` : `${time}`;
      break;

    // Update minutes with leading zero
    case "min":
      min.innerText = time < 10 ? `0${time}` : `${time}`;
      break;

    // Update seconds and append AM/PM based on current hour
    case "sec":
      var hrtime = new Date().getHours(); // Get current hour for AM/PM
      var period = hrtime < 12 ? "AM" : "PM";
      var formattedSec = time < 10 ? `0${time}` : `${time}`;
      sec.innerText = `${formattedSec} ${period}`;
      break;

    // Update milliseconds with 3-digit formatting and IST label
    case "Msec":
      if (time < 10) {
        milisec.innerText = `00${time} IST`;
      } else if (time < 100) {
        milisec.innerText = `0${time} IST`;
      } else {
        milisec.innerText = `${time} IST`;
      }
      break;
  }
}

// Main function to fetch current time and update UI
function displayTime() {
  var time = new Date();

  // Update each time segment
  updateClock(time.getHours(), "hr");
  updateClock(time.getMinutes(), "min");
  updateClock(time.getSeconds(), "sec");
  updateClock(time.getMilliseconds(), "Msec");
}

// Run the clock update every 100 milliseconds

setInterval(displayTime, 100);
