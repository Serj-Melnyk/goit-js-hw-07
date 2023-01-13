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
  console.log(evt);
  evt.preventDefault();
}

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();

const instance = basicLightbox.create(`
<img src="${item.preview}" alt="${item.description}">
`);
instance.show();
// // console.log(basicLightbox);
// console.log(basicLightbox);
