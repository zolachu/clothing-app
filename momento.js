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
// $(function () {
  [...document.querySelectorAll('.draggable')].forEach((element) => {
    const image = element.querySelector('img');
    console.log(element.offsetHeight);
//TODO: find height and width of element!!
    initProducts.push({
      name: element.id,
      position: [0, 0],
      size: [image.naturalWidth /image.naturalHeight, element.offsetHeight],
    });
  });

  momento.push({ products: initProducts, background: initBackground });

  console.log(momento);
// });



