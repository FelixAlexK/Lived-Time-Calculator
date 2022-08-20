const divs = document.getElementsByTagName('div');
const birthDate = 'October 05, 2002 00:00:00';

let yearsDiv = document.getElementById('years');
let monthsDiv = document.getElementById('months');
let weeksDiv = document.getElementById('weeks');
let daysDiv = document.getElementById('days');
let hoursDiv = document.getElementById('hours');
let minutesDiv = document.getElementById('minutes');
let secondsDiv = document.getElementById('seconds');

let years;
let months;
let weeks;
let days;
let hours;
let minutes;
let seconds;

async function build(){
  setLayout();
  calcTimeLived();
  render();
}

function calcTimeLived(){
  let birthday = new Date('2002-10-05 00:00');
  let ageDifMs = Date.now() - birthday.getTime(); 
  let date = new Date(ageDifMs);
  seconds = date / 1000;
  minutes = seconds / 60;
  hours = minutes / 60;
  days = hours / 24;
  weeks = days / 7;
  months = weeks / 4.345;
  years = months / 12;
}

function render(){
  yearsDiv.innerHTML = `${Math.round(years)} years`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  monthsDiv.innerHTML =`${Math.round(months)} months `.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  weeksDiv.innerHTML = `${Math.round(weeks)} weeks `.replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
  daysDiv.innerHTML = `${Math.round(days)} days `.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  hoursDiv.innerHTML = `${Math.round(hours)} hours `.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  minutesDiv.innerHTML = `${Math.round(minutes)} minutes `.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  secondsDiv.innerHTML = `${Math.round(seconds)} seconds `.replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
}


function setLayout() {
  let i = 0;

  while (i < divs.length) {
    divs[i].style.height = (100 / divs.length) + 'vh';
    i++;
  }

}

