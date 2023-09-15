const ticks = document.querySelectorAll('.tick');
const needles = document.querySelectorAll('.needles--needle');
const needleHour = document.querySelector('.needles__hour');
const needleMinute = document.querySelector('.needles__minute');
const needleSecond = document.querySelector('.needles__second');
ticks.forEach((tick, index) => {
  console.log(index);
  tick.style.setProperty('--tick-degree', index * 30);
});

setInterval(setClock, 1000);

function setClock() {
  const currentDate = new Date();
  const hr = 30 * currentDate.getHours() + currentDate.getMinutes() / 2;
  const min = 6 * currentDate.getMinutes();
  const sec = 6 * currentDate.getSeconds();
  needleSecond.style.setProperty('--needle-degree', sec);
  needleMinute.style.setProperty('--needle-degree', min);
  needleHour.style.setProperty('--needle-degree', hr);
}
