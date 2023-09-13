function addResizableToMomento(e, ui) {
  let copyLastMoment = {};
  if (momento.length > 0) {
    let lastMoment = momento[momento.length - 1];
    copyLastMoment = structuredClone(lastMoment);
  }

  for (let i in copyLastMoment.products) {
    let product = copyLastMoment.products[i];
    if (product.name === e.target.id) {
      const ratio = ui.size.width / ui.size.height;
      const size = [ratio, ui.size.height];
      product.size = size;
    }
  }
  console.log(copyLastMoment);
  momento.push(copyLastMoment);
  level++;
}

const el = document.querySelector('.draggable');
const ne = document.querySelector('.ne');
const img = document.querySelector('img');

el.addEventListener('mousedown', mousedown);

// if (getEventListeners(el).contains('mousedown')) {

// }
ne.addEventListener('mousedown', mousedownResize);
function mousedown(e) {
  console.log('nooo');
  e.preventDefault();
  prevX = e.clientX;
  prevY = e.clientY;

  window.addEventListener('mousemove', mousemove);
  window.addEventListener('mouseup', mouseup);

  let rect = el.getBoundingClientRect();

  function mousemove(e) {
    let newX = prevX - e.clientX;
    let newY = prevY - e.clientY;

    el.style.top = rect.top - newY + 'px';
    el.style.left = rect.left - newX + 'px';
  }

  function mouseup(e) {
    window.removeEventListener('mousemove', mousemove);
    window.removeEventListener('mouseup', mouseup);
  }
}

let currentResizer;
function mousedownResize(e) {
  e.preventDefault();
  prevX = e.clientX;
  prevY = e.clientY;
  currentResizer = e.target;
  window.addEventListener('mousemove', mousemove);
  window.addEventListener('mouseup', mouseup);

  function mousemove(e) {
    let newX = prevX - e.clientX;
    let newY = prevY - e.clientY;
    let rect = el.getBoundingClientRect();
    el.style.width = rect.width - newX + 'px';
    el.style.height = rect.height - newY + 'px';

    console.log(el.style.width, rect.width);
    prevX = e.clientX;
    prevY = e.clientY;
  }

  function mouseup(e) {
    window.removeEventListener('mousemove', mousemove);
    window.removeEventListener('mouseup', mouseup);
  }
}
