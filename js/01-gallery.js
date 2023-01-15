import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
// const document = document.querySelector("");
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

  gallery.addEventListener("click", (evt) => {
    if (evt.code === "Escape") {
      // document.removeEventListener("keydown", onEscape);
      instance.close();
    }
  });

  // onShow: (instance) => {
  //   onEscape;
  // };
  // onClose: (instance) => {
  //   document.removeEventListener("keydown", onEscape);
  // };

  // instance.close(() => closeModal());
  // instance.close(() => console.log("lightbox not visible anymore"));
  // document.addEventListener("keydown", onEscape);
  // function onEscape(evt) {
  // document.removeEventListener("keydown", onEscape);
  // }
}

// document.addEventListener("keydown", onEscape);

// function onEscape(evt) {
//   document.addEventListener("keydown", onEscape);
//   console.log(evt);

// function onEscape(evt) {}

// instance.show();
// }
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
