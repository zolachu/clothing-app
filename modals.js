restartButton.addEventListener('click', () => {
  collageOverlay.classList.add('active');
  restartModal.classList.add('active');
  collageMenu.forEach((menu) => menu.classList.remove('active'));
});

goBackBtn.addEventListener('click', () => {
  restartModal.classList.remove('active');
  collageOverlay.classList.remove('active');
});

closeTabs.forEach((ct) => removeMenu(ct));
removeMenu(overlay);

function removeMenu(element) {
  element.addEventListener('click', () => {
    collageMenu.forEach((popup) => popup.classList.remove('active'));
    overlay.classList.remove('active');
  })
}