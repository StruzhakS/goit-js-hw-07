import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.table(galleryItems);

const galleryList = document.querySelector('.gallery');
let markup = galleryItems
  .map(({ preview, original, description }) => {
    console.log(original);
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
  })
  .join('');

galleryList.insertAdjacentHTML('beforeend', markup);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  nav: true,
  overlayOpacity: 0.9,
  captionDelay: 250,
});
