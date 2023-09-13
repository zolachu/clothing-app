const url = 'https://rickandmortyapi.com/api/character/2';
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

(async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const objectURL = result.image;
    // const objectURL = URL.createObjectURL(result.image);
    let myImage = document.querySelector('.draggable img');
    myImage.src = objectURL;
  } catch (error) {
    console.error(error);
  }
})();
