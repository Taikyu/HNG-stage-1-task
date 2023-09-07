const showDate = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const showTime = document.querySelector('[data-testid="currentUTCTime"]');
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function updateCurrentTimeAndDay() {
  const currentDate = new Date();
  const dayIndex = currentDate.getUTCDay();
  const currentDay = daysOfTheWeek[dayIndex];
  const currentUTCTime = currentDate.getTime();

  //display day and time in milliseconds
  showDate.textContent = ` ${currentDay}`;
  showTime.textContent = `${currentUTCTime}`;
}
updateCurrentTimeAndDay();
