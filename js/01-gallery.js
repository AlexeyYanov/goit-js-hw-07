import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallerySet = document.querySelector(".gallery");

const galleryMarkup = createMarkup(galleryItems);

function createMarkup(galleryItems) {
  return galleryItems
    .map((objectImage) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${objectImage.original}">
          <img
            class="gallery__image"
            src="${objectImage.preview}"
            data-source="${objectImage.original}"
            alt="${objectImage.description}"
          />
        </a>
      </div>`;
    })
    .join("");
}
gallerySet.insertAdjacentHTML("afterbegin", galleryMarkup);

console.log(galleryMarkup);

function onImageClick(ev) {
  ev.preventDefault();
  if (ev.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src= "${ev.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        console.log("modalisopen");
        window.addEventListener("keydown", onCloseEscape);
      },
      onClose: (instance) => {
        console.log("modalisclose");
        window.removeEventListener("keydown", onCloseEscape);
      },
    }
  );
  instance.show();

  function onCloseEscape(ev) {
    if (ev.key === "Escape") {
      instance.close();
    }
  }
}

gallerySet.addEventListener("click", onImageClick);

// https://developer.mozilla.org/ru/docs/Web/API/Event/preventDefault

// https://learn.javascript.ru/

console.log(galleryItems);
