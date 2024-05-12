const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumberEl = document.getElementById("day-number");
const year = document.getElementById("year");

const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());

const month = date.getMonth();
const day = date.getDay();


monthNameEl.innerText = date.toLocaleString("fr", {month:"long"});
dayNameEl.innerText = date.toLocaleString("fr" , {weekday:"long"});
dayNumberEl.innerText = date.getDate();
year.innerText = date.getFullYear();
