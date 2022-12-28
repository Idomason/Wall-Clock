// Initial Element Selections
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

// Create a clock update function
const updateClock = function () {
  const currentTime = new Date();
  // setTimeout(updateClock, 1000);

  // Get Hour, Minute, and Second values
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  // Convert all values of Hours, Minutes, and Seconds to degree
  const hourToDegree = (hour / 12) * 360;
  const minuteToDegree = (minute / 60) * 360;
  const secondToDegree = (second / 60) * 360;

  // Dynamically manipulate the CSS values of the Hours, Minutes, and SAeconds
  hourHand.style.transform = `rotate(${hourToDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteToDegree}deg)`;
  secondHand.style.transform = `rotate(${secondToDegree}deg)`;
};
// updateClock();

setInterval(updateClock, 1000);
