const divs = document.getElementsByTagName('div');
let textField = document.getElementById('text');

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



function getBirthDate(){
  let birthDate = textField.value;
  textField.value = '';
  calcTimeLived(birthDate);
}



function calcTimeLived(birthdate){
  
  let birthday = new Date(birthdate);
  let ageDifMs = Date.now() - birthday.getTime(); 
  let date = new Date(ageDifMs);
  seconds = date / 1000;
  minutes = seconds / 60;
  hours = minutes / 60;
  days = hours / 24;
  weeks = days / 7;
  months = weeks / 4.345;
  years = months / 12;

  render();
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

