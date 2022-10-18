var x;
var startstop = 0;

function StartStop() { 

  startstop = startstop + 1;

  if (startstop === 1) {
    start();
    document.getElementById("start").innerHTML = "Stop";
  } else if (startstop === 2) {
    document.getElementById("start").innerHTML = "Start";
    startstop = 0;
    stop();
  }
}

function start() {
  x = setInterval(timer, 10);
} 

function stop() {
  clearInterval(x);
} 
var milisec = 0;
var sec = 0; 
var min = 0;
var hour = 0;

var miliSecOut = 0;
var secOut = 0;
var minOut = 0;
var hourOut = 0;

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  function reset() {
    milisec = 0;
    sec = 0;
    min = 0
    hour = 0;
  
    document.querySelector(".milisec").innerHTML = "00";
    document.querySelector(".sec").innerHTML = "00";
    document.querySelector(".min").innerHTML = "00";
    document.querySelector(".hour").innerHTML = "00";
  
  }

function timer() {

  miliSecOut = checkTime(milisec);
  secOut = checkTime(sec);
  minOut = checkTime(min);
  hourOut = checkTime(hour);

  milisec = ++milisec;

  if (milisec === 100) {
    milisec = 0;
    sec = ++sec;
  }

  if (sec == 60) {
    min = ++min;
    sec = 0;
  }

  if (min == 60) {
    min = 0;
    hour = ++hour;

  }
  document.querySelector(".milisec").innerHTML = miliSecOut;
  document.querySelector(".sec").innerHTML = secOut;
  document.querySelector(".min").innerHTML = minOut;
  document.querySelector(".hour").innerHTML = hourOut;
}