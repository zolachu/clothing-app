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
setInterval(bounce, 10000);

function bounce() {
  boxes.forEach((box) => {
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        box.style.boxShadow = '0 0 30px #E0FBC2';
      }, 500);
      setTimeout(() => {
        box.style.boxShadow = 0;
      }, 500);
    }
  });
}
