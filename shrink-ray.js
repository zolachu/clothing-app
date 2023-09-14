const shrinkRayEl = document.querySelector('.shrink-ray *');

console.log('here');
shrinkRayEl.addEventListener('click', (e) => {
  console.log(e.target);
  const deg = getComputedStyle(shrinkRayEl).getPropertyValue('--tilt-degree');
  console.log(deg);
  const deg2 = 20 - deg;
  shrinkRayEl.style.setProperty('--tilt-degree', `${deg2}`);
});
