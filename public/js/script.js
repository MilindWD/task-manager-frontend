const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  document.querySelector(".date h2").innerHTML = date.getFullYear();

  let days = "";
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date" id="${x}" onclick="reply_click(this.id)">${prevLastDay - x + 1}</div>`;
    monthDays.innerHTML = days;
  }
  
  for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
      days += `<div class="today" id="${i}" onclick="reply_click(this.id)">${i}</div>`;
      monthDays.innerHTML = days;
    } else {
      days += `<div id="${i}" onclick="reply_click(this.id)">${i}</div>`;
      monthDays.innerHTML = days;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date" id="${j}" onclick="reply_click(this.id)">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

var reply_click = function (clicked_id){
    document.querySelector(".days").addEventListener('click',() => {
        location.replace("http://localhost:3000/task?q="+ document.querySelector(".date h1").innerHTML +" "+clicked_id+" "+ date.getFullYear() );
    });
}

document.querySelector(".p").addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();

});

document.querySelector(".n").addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();

