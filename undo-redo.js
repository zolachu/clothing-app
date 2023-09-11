// TODO: implement disabled CSS style to disable undo button and redo button

if (level === 0) {
  undo.classList.add('disabled');
} else {
  undo.classList.remove('disabled');
}

undo.addEventListener('click', () => {
  console.log(level);
  //   if (level === 0) return;
  console.log(level);
  level--;
  let currentMoment = momento[level];
  //   [...document.querySelectorAll('.draggable')].forEach((element) => {
  //     console.log('1');
  //     initProducts.push({
  //       name: element.id,
  //       position: [0, 0],
  //       size: [element.offsetWidth, element.offsetHeight],
  //     });
  //   });
  for (let i in currentMoment.products) {
    let product = currentMoment.products[i];
    console.log(product.name);
    // console.log(document.querySelectorAll('.ui-widget-content')[i].);
    document.getElementById(product.name).style.height = product.size[1] + 'px';
    console.log(product.size);
    const ratio = product.size[0];
    document.getElementById(product.name).style.width =
      product.size[1] * ratio + 'px';
    
  }
  let color = currentMoment.background;
  collageBody.style.backgroundColor = color;
  themeColor.style.backgroundColor = color;
});
