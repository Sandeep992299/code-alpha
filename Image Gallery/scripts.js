document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelector('.gallery-images');
    const images = document.querySelectorAll('.gallery-images img');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0;

    function showImage(index) {
        const imageWidth = images[0].clientWidth;
        galleryImages.style.transform = `translateX(${-index * imageWidth}px)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showImage(currentIndex);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            showImage(currentIndex);
        }
    });
});
