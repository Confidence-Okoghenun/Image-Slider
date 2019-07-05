let productPhotoArr = ['product1.jpg', 'product2.jpg', 'product3.jpg', 'product4.jpg', 'product5.jpg'];
    let imgContainer = document.querySelector('.view-finder .images');
    imgContainer.innerHTML = '';
    let productDisplay = document.querySelector('.display-with-controls .display');
    let currentPhotoIndex = 0;
    let img;
    let imgControls = document.querySelectorAll('.controls img');

    productPhotoArr.forEach(function (img, i) {
        if (i == 0) {
            imgContainer.innerHTML += `<img src="img/${img}" alt="" class="active">`
        } else {
            imgContainer.innerHTML += `<img src="img/${img}" alt="">`
        }
    })
    imgControls.forEach(function (control) {
        control.addEventListener('click', function (e) {
            if (e.target.getAttribute('alt') === 'Next') {
                currentPhotoIndex >= productPhotoArr.length - 1 ? currentPhotoIndex = 0 : currentPhotoIndex++
                img = productPhotoArr[currentPhotoIndex];
                productDisplay.style.backgroundImage = `url(img/${img})`;
            } else {
                currentPhotoIndex == 0 ? currentPhotoIndex = productPhotoArr.length - 1 : currentPhotoIndex--
                img = productPhotoArr[currentPhotoIndex];
                productDisplay.style.backgroundImage = `url(img/${img})`;

            }

            document.querySelectorAll('.view-finder .images img').forEach(function (img, i) {
                if (i == currentPhotoIndex) {
                    img.classList.add('active')
                } else {
                    img.classList.remove('active')
                }
            })
        })
    })