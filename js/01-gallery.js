import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));
galleryContainer.addEventListener('click', onGalleryItemClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class='gallery__item'>
                <a class='gallery__link' href=${original}>
                    <img
                    class='gallery__image'
                    src=${preview}
                    data-source=${original}
                    alt=${description}
                    />
                </a>
                </div>`
    }).join('');
};

function onGalleryItemClick(event) {
    event.preventDefault();
    const isGalleryItem = event.target.classList.contains('gallery__image');

    if (!isGalleryItem) {
      return;
    };
    
    const instance = basicLightbox.create(`<img src=${event.target.dataset.source}>`);
    instance.show();

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            instance.close();
        };
    });
};