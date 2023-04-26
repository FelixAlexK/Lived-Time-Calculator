const form = document.querySelector('.form')
const input = document.querySelector('#date-input')
const content_container = document.querySelector('.content-container')
const data =

{
  years: Number,
  months: Number,
  weeks: Number,
  days: Number,
  hours: Number,
  minutes: Number,
  seconds: Number
}


form.addEventListener('submit', (event) => {
  content_container.replaceChildren()
  event.preventDefault()
  const date = Date.parse(input.value)
  livedTime(date)
  display()
})

const display = () => {
  for (const value in data) {
    let element = document.createElement('div')
    element.classList.add('element')
    element.textContent = `${value} : ${data[value]}`
    content_container.appendChild(element)
  }
}








const livedTime = (birthdate) => {
  let birthday = new Date(birthdate); //Set Date
  let diff = Date.now() - birthday.getTime(); //get difference between dates
  let diffDate = new Date(diff); //set new date

  const seconds = diffDate / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;
  const months = weeks / 4.345;
  const years = months / 12;

  data.days = Math.floor(days);
  data.hours = Math.floor(hours);
  data.minutes = Math.floor(minutes);
  data.months = Math.floor(months);
  data.seconds = Math.floor(seconds);
  data.weeks = Math.floor(weeks);
  data.years = Math.floor(years);

}




