const url = './assets/gun-1.svg';
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};
const urls = [];
const images = document.querySelectorAll('.draggable img');

[...images].forEach((draggableImage, index) => {
  draggableImage.src = `./assets/gun-${index + 1}.svg`;
});

(async () => {
  try {
    // const response = await fetch(url, options);
    // const result = await response.json();
    // const objectURL = result.image;
    // const objectURL = URL.createObjectURL(result.image);
    // let myImage = document.querySelector('.draggable img');
    // // myImage.src = objectURL;
    // myImage.src = url;
  } catch (error) {
    console.error(error);
  }
})();
