const activeImage = document.querySelector('.main__image');
const noActiveImages = document.querySelectorAll('.main__image-no-active');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

const path = "imges/";
const ext = ".jpg";

noActiveImages.forEach(img => {
    img.addEventListener('click', function(e) {
        activeImage.src = e.target.src;
        activeImage.id = e.target.id
    })
});

nextBtn.addEventListener('click', function() {
    currentImage = activeImage.src;
    let active = document.querySelector('.main__image');
    let next = parseInt(active.id) + 1;

    console.log(active);
    if (activeImage.id < noActiveImages.length) {
        activeImage.src = path + next + ext;
        activeImage.id++;

        console.log(activeImage.src = path + next + ext);
    } else {
        next = 1;
        activeImage.src = path + (noActiveImages[0].id) + ext;
        activeImage.id = 1;
    }
})

prevBtn.addEventListener('click', function() {
    currentImage = activeImage.src;
    let active = document.querySelector('.main__image');
    let prev = parseInt(active.id) - 1;

    if (activeImage.id > 1) {
        activeImage.src = path + prev + ext;
        activeImage.id--;

        console.log(activeImage.src = path + prev + ext);
    } else {
        prev = noActiveImages.length - 1;
        activeImage.src = path + (noActiveImages[prev].id) + ext;
        activeImage.id = noActiveImages.length;
    }
})