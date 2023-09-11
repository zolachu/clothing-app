// const urls = ['https://www.uniqlo.com/jp/ja/contents/feature/lifewear-collection/common_23fw/img/collage/productSub/productSub_460711_30.png',
// 'https://www.uniqlo.com/jp/ja/contents/feature/lifewear-collection/common_23fw/img/collage/productSub/productSub_460914_12.png']

const urls = [
  './assets/product1.png',
  './assets/product2.png',
  './assets/product3.png',
];
const url =
  'https://www.uniqlo.com/jp/ja/contents/feature/lifewear-collection/common_23fw/img/collage/productSub/productSub_460914_12.png';
const options = {
  method: 'GET',
  headers: {
    // 'Content-Type': 'application/json',
  },
};

(async () => {
  try {
    for (i = 0; i < 3; i++) {
      // const response = await fetch(urls[i], options);
      // const result = await response.blob();
      // const objectURL = URL.createObjectURL(result);
      let myImage;
      if (i === 0) {
        myImage = document.querySelector('#test');
      } else if (i === 1) {
        myImage = document.querySelector('#test2');
      } else {
        myImage = document.querySelector('#test3');
      }

      // myImage.src = objectURL;
      myImage.src = urls[i];
    }
  } catch (error) {
    console.error(error);
  }
})();

(async () => {
  const request = new Request('./../scrape/images.txt');
  const response = await fetch(request);
  // console.log(await response.text());
})();
