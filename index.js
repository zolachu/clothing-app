// Elements
const menu = document.querySelectorAll('.category-wrapper');
const overlay = document.querySelector('.overlay');
const body = document.body;
const collageMenu = document.querySelectorAll('.collage-menu');
const backgroundColors = document.querySelectorAll('.background-color');
const collageContainer = document.querySelector('.collage-container');
const collageHeader = document.querySelector('.collage-header');
const collageBody = document.querySelector('.collage-body');
const collageFooter = document.querySelector('.collage-footer');
const closeTabs = document.querySelectorAll('.close-tab');
const themeColor = document.querySelector('#theme-color');
const restartButton = document.querySelector('#restart-btn');
const collageOverlay = document.querySelector('.collage-overlay');
const restartModal = document.querySelector('.restart-modal');
const goBackBtn = document.querySelector('.go-back');
const nextArrowButton = document.querySelector('#next-arrow-btn');
const downloadButton = document.querySelector('.download-btn');

const themeColors = ['#fff', '#f4f4f4', '#FEF5EE', '#D2B48C', '#A9A9A9'];

let isOnPrintPage = false;

menu.forEach((item) => {
  item.addEventListener('click', (e) => {
    const menuId = e.target.querySelector('span').dataset.tabContent;
    document.querySelector(menuId).classList.add('active');
    overlay.classList.add('active');
  });
});


body.addEventListener('click', (e) => {
  if (!e.target.classList.contains('draggable')) {
    loseFocus();
  } else {
    e.target.classList.add('active');
  }
});

backgroundColors.forEach((colorItem, index) => {
  colorItem.style.backgroundColor = themeColors[index];

  colorItem.addEventListener('click', () => {
    backgroundColors.forEach((c) => c.classList.remove('active'));
    colorItem.classList.add('active');
    const color = colorItem.style.backgroundColor;
    collageBody.style.backgroundColor = color;
    themeColor.style.backgroundColor = color;
  });
});


closeTabs.forEach((ct) => removeMenu(ct));
removeMenu(overlay);

function removeMenu(element) {
  element.addEventListener('click', () => {
    collageMenu.forEach((menu) => menu.classList.remove('active'));
    overlay.classList.remove('active');
  })
}

nextArrowButton.addEventListener('click', () =>{  
  isOnPrintPage = !isOnPrintPage;
  console.log('lc')
  collageContainer.classList.toggle('visible');
  
});

downloadButton.addEventListener('click', () => { 
    download();
})

