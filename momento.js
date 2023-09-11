let momento = [];

//schema for the momento
// momento = [
//   {
//     products: [{ name: 'product1', position: [0, 0], size: [5, 8] }],
//     background: 'white',
//   },
// ];
let initProducts = [];
let initBackground = 'white';

[...document.querySelectorAll('.draggable')].forEach((element) => {
  console.log('1');
  initProducts.push({
    name: element.id,
    position: [0, 0],
    size: [element.offsetWidth, element.offsetHeight],
  });
});
momento.push({ products: initProducts, background: initBackground });

console.log(momento);
