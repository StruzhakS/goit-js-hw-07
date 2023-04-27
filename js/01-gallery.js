import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryList = document.querySelector('.gallery');
let markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
        <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
        />
        </a>
        </li>`
  )
  .join('');
galleryList.insertAdjacentHTML('beforeend', markup);
galleryList.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.tagName !== 'IMG') return;

  const instance = basicLightbox.create(`<img src=${e.target.dataset.source}>`);
  instance.show();
});
