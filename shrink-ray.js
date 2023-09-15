const shrinkRayEl = document.querySelector('.shrink-ray *');

console.log('here');
shrinkRayEl.addEventListener('click', (e) => {
  console.log(e.target);
  const deg = getComputedStyle(shrinkRayEl).getPropertyValue('--tilt-degree');
  console.log(deg);
  const deg2 = 20 - deg;
  //   shrinkRayEl.style.setProperty('--tilt-degree', `${deg2}`);
});

const boxes = document.querySelectorAll('.light-container .box');
setInterval(bounce, 5000);

const neonColor = window
  .getComputedStyle(shrinkRayEl)
  .getPropertyValue('--ray-neon-color');
function bounce() {
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      shrinkRayEl.style.setProperty('--ray-neon-color', 'rgba(0, 0, 0, 1)');
      boxes.forEach((box) => {
        box.style.boxShadow = 0;
      });
    }, 80 * i);
    setTimeout(() => {
      shrinkRayEl.style.setProperty('--ray-neon-color', neonColor);

      boxes.forEach((box) => {
        box.style.boxShadow = '0 0 30px var(--ray-neon-color)';
      });
    }, 100 * i);
  }
}
