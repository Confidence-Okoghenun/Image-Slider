let productPhotoArr = [
  "img/product1.jpg",
  "img/product2.jpg",
  "img/product3.jpg",
  "img/product4.jpg",
  "img/product5.jpg",
  "img/product6.jpg"
];
let imgContainer = document.querySelector(".view-finder .images");
imgContainer.innerHTML = "";
let productDisplay = document.querySelector(".display-with-controls .display");
const productDisplayContainer = document.querySelector('.display-with-controls');
let currentPhotoIndex = 0;
let img;
// let imgControls = document.querySelector(".controls");
const imgPopupCloseBtn = document.querySelector(".img-popup-close-btn");
const imgPopupModal = document.querySelector(".img-popup");
const imgPopupModalImg = document.querySelector(".img-popup-container-img");

setBackgroundImage(0);

productPhotoArr.forEach(function(img, i) {
  if (i == 0) {
    imgContainer.innerHTML += `<div style="
    background-image: url(${img});" alt="" class="active image-item" data-index="${i}"></div>`;
  } else {
    imgContainer.innerHTML += `<div style="
    background-image: url(${img});" alt="" class="image-item" data-index="${i}"></div>`;
  }
});

productDisplayContainer.addEventListener("click", function(e) {
  if (e.target.getAttribute("alt") === "Next") {
    currentPhotoIndex >= productPhotoArr.length - 1
      ? (currentPhotoIndex = 0)
      : currentPhotoIndex++;
    setBackgroundImage(currentPhotoIndex);
  } else if (e.target.getAttribute("alt") === "Previous") {
    currentPhotoIndex == 0
      ? (currentPhotoIndex = productPhotoArr.length - 1)
      : currentPhotoIndex--;
    setBackgroundImage(currentPhotoIndex);
  } else {
    showImgPopupModal();
  }
});

imgContainer.querySelectorAll(".image-item").forEach(img => {
  img.addEventListener("click", e => {
    setBackgroundImage(e.target.getAttribute("data-index"));
  });
});

function showImgPopupModal() {
    imgPopupModal.classList.remove("hide");
}

function setBackgroundImage(imgIndex) {
  img = productPhotoArr[imgIndex];
  productDisplay.style.backgroundImage = `url(${img})`;
  imgPopupModalImg.style.backgroundImage = `url(${img})`;

  document
    .querySelectorAll(".view-finder .images .image-item")
    .forEach(function(img, i) {
      if (i == imgIndex) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    });
}

imgPopupCloseBtn.addEventListener("click", () => {
  imgPopupModal.classList.add("hide");
});
