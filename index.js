const daysRef = document.querySelector(`[data-value="days"]`);
const hoursRef = document.querySelector(`[data-value="hours"]`);
const minsRef = document.querySelector(`[data-value="mins"]`);
const secsRef = document.querySelector(`[data-value="secs"]`);

class CountdownTimer {
  constructor({ selector, targetDate, updateOnLoad }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.currentDate = null;
    this.timerId = null;
    this.updateOnLoad = updateOnLoad;
  }
  
  startTimer() {    
    this.timerId = setInterval(this.calcTime.bind(this), 1000);
  };
  
  calcTime() {
    this.currentDate = Date.now();
    let deltaTime = this.targetDate - this.currentDate;
    const time = this.getTimeComponents(deltaTime);
    this.updateOnLoad(time);
    this.stopTimer(time);
  }

  getTimeComponents(totalTime) {
    const secs = Math.floor((totalTime % (1000 * 60)) / 1000);
    const mins = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((totalTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(totalTime / (1000 * 60 * 60 * 24));
    return { secs, mins, hours, days };
  };

  stopTimer({ secs, mins, hours, days }) {
    if (secs === 0 && mins === 0 && hours === 0 && days === 0) {
      clearInterval(this.timerId);    
    }
  };
};

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(`Nov 17, 2021`),
  updateOnLoad: updateTimeComponents,
});

window.addEventListener("DOMContentLoaded", countdownTimer.startTimer());

function updateTimeComponents({ secs, mins, hours, days }) {
    secsRef.textContent = secs < 10 ? `0${secs}` : secs;
    minsRef.textContent = mins < 10 ? `0${mins}` : mins;
    hoursRef.textContent = hours < 10 ? `0${hours}` : hours;
    daysRef.textContent = days < 10 ? `0${days}` : days;
};

// 2 ВАРИАНТ

// class CountdownTimer {
//   constructor(selector, targetDate) {
//     this.selector = selector;
//     this.targetDate = targetDate;
//     this.currentDate = null;
//     this.timerId = null;

//     this.refs = {
//       days: document.querySelector(`[data-value="days"]`),
//       hours: document.querySelector(`[data-value="hours"]`),
//       mins: document.querySelector(`[data-value="mins"]`),
//       secs: document.querySelector(`[data-value="secs"]`),
//     };
//   }
  
//   startTimer() {    
//     this.timerId = setInterval(this.calcTime.bind(this), 1000);
//   };
  
//   calcTime() {
//   this.currentDate = Date.now();
//   let deltaTime = this.targetDate - this.currentDate;

//   const secs = Math.floor((deltaTime % (1000 * 60)) / 1000);
//   const mins = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
//   const hours = Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const days = Math.floor(deltaTime / (1000 * 60 * 60 * 24));

//   this.refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
//   this.refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
//   this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
//   this.refs.days.textContent = days < 10 ? `0${days}` : days;
  
//   if (secs === 0) {
//       clearInterval(this.timerId);    
//     }
//   };
// };

// const countdownTimer = new CountdownTimer('#timer-1', new Date(`Nov 17, 2021`));
// window.addEventListener("DOMContentLoaded", countdownTimer.startTimer());


// 3 ВАРИАНТ

// const daysRef = document.querySelector(`[data-value="days"]`);
// const hoursRef = document.querySelector(`[data-value="hours"]`);
// const minsRef = document.querySelector(`[data-value="mins"]`);
// const secsRef = document.querySelector(`[data-value="secs"]`);

// const targetDate = new Date(`Nov 17, 2021`);
// let currentDate = null;
// let timerId = null;

// function startTimer() {    
//   timerId = setInterval(calcTime, 1000);  
// };

// function calcTime() {
//   currentDate = Date.now();
//   let deltaTime = targetDate - currentDate;

//   const secs = Math.floor((deltaTime % (1000 * 60)) / 1000);
//   const mins = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
//   const hours = Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const days = Math.floor(deltaTime / (1000 * 60 * 60 * 24));

//   secsRef.textContent = secs < 10 ? `0${secs}` : secs;
//   minsRef.textContent = mins < 10 ? `0${mins}` : mins;
//   hoursRef.textContent = hours < 10 ? `0${hours}` : hours;
//   daysRef.textContent = days < 10 ? `0${days}` : days;
  
//   if (secs === 0) {
//     clearInterval(timerId);    
//   };
// };

// window.addEventListener("DOMContentLoaded", startTimer);
