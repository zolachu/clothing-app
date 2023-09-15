// function addResizableToMomento(e, ui) {
//   let copyLastMoment = {};
//   if (momento.length > 0) {
//     let lastMoment = momento[momento.length - 1];
//     copyLastMoment = structuredClone(lastMoment);
//   }

//   for (let i in copyLastMoment.products) {
//     let product = copyLastMoment.products[i];
//     if (product.name === e.target.id) {
//       const ratio = ui.size.width / ui.size.height;
//       const size = [ratio, ui.size.height];
//       product.size = size;
//     }
//   }
//   console.log(copyLastMoment);
//   momento.push(copyLastMoment);
//   level++;
// }

const elList = document.querySelectorAll('.draggable');
const neList = document.querySelectorAll('.ne');
const img = document.querySelectorAll('img');

[...elList].forEach((el) => {
  el.addEventListener('mousedown', function (e) {
    mousedown(e, this);
  });
});

[...neList].forEach((ne) => {
  ne.addEventListener('mousedown', function (e) {
    mousedownResize(e, this);
  });
});

function mousedown(e, el) {
  console.log(el);
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
function mousedownResize(e, ne) {
  let el = ne.parentElement.querySelector('img');
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
