import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallerySet = document.querySelector(".gallery");

const galleryMarkup = createMarkupSample(galleryItems);

function createMarkupSample(galleryItems) {
  return galleryItems
    .map((objectImage) => {
      return `<a class="gallery__item" href="${objectImage.original}">
          <img
            class="gallery__image"
            src="${objectImage.preview}"
            alt="${objectImage.description}"
          />
        </a>`;
    })
    .join("");
}
gallerySet.insertAdjacentHTML("afterbegin", galleryMarkup);

console.log(galleryMarkup);

let gallery = new SimpleLightbox(".gallery .gallery__item", {
  captionDelay: 250,
  captionsData: "alt",
  captionPosition: "bottom",
});

// function onImageClick(ev) {
//   ev.preventDefault();
//   if (ev.target.nodeName !== "IMG") {
//     return;
//   }
//   const instance = basicLightbox.create(
//     `<img src= "${ev.target.dataset.source}" width="800" height="600">`,
//     {
//       onShow: (instance) => {
//         console.log("modalisopen");
//         window.addEventListener("keydown", onCloseEscape);
//       },
//       onClose: (instance) => {
//         console.log("modalisclose");
//         window.removeEventListener("keydown", onCloseEscape);
//       },
//     }
//   );
//   instance.show();

//   function onCloseEscape(ev) {
//     if (ev.key === "Escape") {
//       instance.close();
//     }
//   }
// }

// gallerySet.addEventListener("click", onImageClick);
