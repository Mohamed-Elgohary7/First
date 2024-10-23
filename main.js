// var d = new Date();
// var d = new Date().getHours();
// var d = new Date().getMinutes();
// var d = new Date().getSeconds();
// var d = new Date().getMilliseconds();
// var d = new Date().getMonth();
// var d = new Date().getDate();
// var d = new Date().getDay();
// var d = new Date().getFullYear();

// document.getElementById("date").innerHTML= d;

// --------------------------------------------------------------------------


// function showTime(){

// var date =new Date();
// var houres =date.getHours();
// var minutes = date.getMinutes();
// var second = date.getSeconds();

// var ampm = houres >= 12 ? 'PM' : 'AM';
//     houres=(houres > 12) ? houres-12 : houres;
//     houres=(houres < 10 )?   "0" + houres : houres;
//     minutes=(minutes <10 )?  "0" + minutes : minutes;
//     second=(second < 10 )?  "0" + second : second;



//     var time = houres + ":" + minutes + ":" + second ;
//     document.getElementById("myClockDisplay").innerHTML = time + " "+ ampm;
//     setTimeout(showTime, 1000);

    


// }
// showTime();

// ----------------------------------------------------------------------------------

var car ={ 
    brand : "toyota",
    model : "corolla",
    year : 2015,
    color : "red",
    speed : 0,
    maxSpeed : 120,
    isRunning : false,
}

console.log(car.brand);
console.log(car.color);



// --------------------------------------------------------------------------------

let x = 100;
x = 1000000;

console.log(x);


// ----------------------------------------------------------------------------------


// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "soon is weeknd "+"its Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }

// console.log(day);

//----------------------------------------------------------------------------------

//stopwatch 

var startTime; // to keep track of the start time
var stopwatchInterval; // to keep track of the interval
var elapsedPausedTime = 0; // to keep track of the elapsed time while stopped

function startStopwatch() {
  if (!stopwatchInterval) {
    startTime = new Date().getTime() - elapsedPausedTime; // get the starting time by subtracting the elapsed paused time from the current time
    stopwatchInterval = setInterval(updateStopwatch, 1000); // update every second
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval); // stop the interval
  elapsedPausedTime = new Date().getTime() - startTime; // calculate elapsed paused time
  stopwatchInterval = null; // reset the interval variable
}

function resetStopwatch() {
  stopStopwatch(); // stop the interval
  elapsedPausedTime = 0; // reset the elapsed paused time variable
  document.getElementById("stopwatch").innerHTML = "00:00:00"; // reset the display
}

function updateStopwatch() {
  var currentTime = new Date().getTime(); // get current time in milliseconds
  var elapsedTime = currentTime - startTime; // calculate elapsed time in milliseconds
  var seconds = Math.floor(elapsedTime / 1000) % 60; // calculate seconds
  var minutes = Math.floor(elapsedTime / 1000 / 60) % 60; // calculate minutes
  var hours = Math.floor(elapsedTime / 1000 / 60 / 60); // calculate hours
  var displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds); // format display time
  document.getElementById("stopwatch").innerHTML = displayTime; // update the display
}

function pad(number) {
  // add a leading zero if the number is less than 10
  return (number < 10 ? "0" : "") + number;
}