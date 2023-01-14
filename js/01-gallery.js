import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const marcup = galleryItems
  .map(
    (item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}"> 
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", marcup);

gallery.addEventListener("click", onClick);
function onClick(evt) {
  console.log(evt.target);
  evt.preventDefault();

  const instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}" width="800" height="600">
  `);
  instance.show();
}

document.addEventListener("keydown", onEscape);
function onEscape(evt) {
  document.removeEventListener("keydown", onEscape);
}

// function closeModal() {
//   gallery.removeEventListener("click", closeModal);
// }
