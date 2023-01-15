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
  document.addEventListener("keydown", onEscape);

  const instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}" width="800" height="600">
  `);
  onShow: (instance) => {
    document.addEventListener("keydown", onEscape);
  };
  onClose: (instance) => {
    document.removeEventListener("keydown", onEscape);
  };

  instance.show();
  function onEscape() {
    if (evt.code === "Escape") {
      return;
    }
  }

  // instance.close(() => closeModal());
  // instance.close(() => console.log("lightbox not visible anymore"));
  // document.addEventListener("keydown", onEscape);
  // function onEscape(evt) {
  // document.removeEventListener("keydown", onEscape);
  // }
}

//............................................

// const onGalleryImgClick = (event) => {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
//   const carousel = basicLightbox.create(
//     `      <img src="${event.target.dataset.source}" width="800" height="600">  `,
//     {
//       onShow: (carousel) => {
//         document.addEventListener("keydown", onEscapeKeyDown);
//       },
//       onClose: (carousel) => {
//         document.removeEventListener("keydown", onEscapeKeyDown);
//       },
//     }
//   );
//   carousel.show();
//   function onEscapeKeyDown(event) {
//     if (event.code !== "Escape") {
//       return;
//     }
//     carousel.close();
//   }
// };
