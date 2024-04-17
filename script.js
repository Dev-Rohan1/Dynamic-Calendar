let currentDate = document.querySelector("header .current-date"),
  daysTag = document.querySelector(".calender .days"),
  controlsIcon = document.querySelectorAll(".controls-icon span");

let date = new Date(),
  currentMonth = date.getMonth();
currentYear = date.getFullYear();

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

let calenderRender = () => {
  let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(),
    lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(),
    lastDayOfMonth = new Date(
      currentYear,
      currentMonth,
      lastDateOfMonth
    ).getDay(),
    lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
  let liTag = "";

  for (let i = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    let isToady =
      i === date.getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToady}">${i}</li>`;
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
  daysTag.innerHTML = liTag;
};
calenderRender();

controlsIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;

    if (currentMonth < 0 || currentMonth > 11) {
      date = new Date(currentYear, currentMonth);
      currentYear = date.getFullYear();
      currentMonth = date.getMonth();
    } else {
      date = new Date();
    }
    calenderRender();
  });
});
