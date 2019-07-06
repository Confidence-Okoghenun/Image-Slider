// Path to images
const productPhotoArr = [
  'img/product1.jpg',
  'img/product2.jpg',
  'img/product3.jpg',
  'img/product4.jpg',
  'img/product5.jpg',
  'img/product6.jpg'
];

let img;
let currentPhotoIndex = 0;
const imgPopupModal = document.querySelector('.img-popup');
const imgContainer = document.querySelector('.view-finder .images');
const imgPopupCloseBtn = document.querySelector('.img-popup-close-btn');
const imgPopupModalImg = document.querySelector('.img-popup-container-img');
const productDisplayContainer = document.querySelector('.display-with-controls');
const productDisplay = document.querySelector('.display-with-controls .display');

function showImgPopupModal() {
  imgPopupModal.classList.remove('hide');
}

function setDisplayImage(imgIndex) {
  img = productPhotoArr[imgIndex];
  productDisplay.style.backgroundImage = `url(${img})`;
  imgPopupModalImg.style.backgroundImage = `url(${img})`;

  document
    .querySelectorAll('.view-finder .images .image-item')
    .forEach(function(img, i) {
      if (i == imgIndex) {
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    });
}

// Inits the app
setDisplayImage(0);
imgContainer.innerHTML = '';

// Generates the image map
productPhotoArr.forEach(function(img, i) {
  if (i === 0) {
    imgContainer.innerHTML += `<div class="image-item-wrapper"><div style="
    background-image: url(${img});" alt="" class="active image-item" data-index="${i}"></div></div>`;
  } else {
    imgContainer.innerHTML += `<div class="image-item-wrapper"><div style="
    background-image: url(${img});" alt="" class="image-item" data-index="${i}"></div></div>`;
  }
});

// Handles click events for the nav arrows
productDisplayContainer.addEventListener('click', function(e) {
  if (e.target.getAttribute('alt') === 'Next') {
    currentPhotoIndex >= productPhotoArr.length - 1
      ? (currentPhotoIndex = 0)
      : currentPhotoIndex++;
    setDisplayImage(currentPhotoIndex);
  } else if (e.target.getAttribute('alt') === 'Previous') {
    currentPhotoIndex == 0
      ? (currentPhotoIndex = productPhotoArr.length - 1)
      : currentPhotoIndex--;
    setDisplayImage(currentPhotoIndex);
  } else {
    // Zooms image if anywhere else on the display area is clicked
    showImgPopupModal();
  }
});

// Makes display image same as image clicked on map
imgContainer.querySelectorAll('.image-item').forEach(img => {
  img.addEventListener('click', e => {
    setDisplayImage(e.target.getAttribute('data-index'));
  });
});

imgPopupCloseBtn.addEventListener('click', () => {
  imgPopupModal.classList.add('hide');
});
