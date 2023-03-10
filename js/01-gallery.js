import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
let instance = null;

galleryEl.innerHTML = createImgGallery(galleryItems);
galleryEl.addEventListener("click", handleImgClick);

function handleImgClick(evt) {
  evt.preventDefault();

  if (checkIfImg(evt.target)) return;

  const urlData = getUrlData(evt.target);
  createInstance(urlData);
  showInstance();
}

function createImgGallery(imgs) {
  return imgs
    .map(
      ({ original, preview, description }) =>
        `<div class="gallery__item">
          <a class="gallery__link" href=${original}>
            <img
              class="gallery__image image"
              src=${preview}
              data-source=${original}
              alt=${description}
            />
          </a>
        </div>`
    )
    .join("");
}

function checkIfImg(element) {
  return element.nodeName !== "IMG";
}

function getUrlData(element) {
  return element.dataset.source;
}

function handleOnShow(evt) {
  if (evt.key === "Escape") {
    instance.close();
  }
}

function createInstance(urlData) {
  instance = new basicLightbox.create(
    `
            <img src=${urlData}>
        `,
    {
      onShow: () => {
        addEventListener("keydown", handleOnShow);
      },
      onClose: () => {
        removeEventListener("keydown", handleOnShow);
      },
    }
  );
}

function showInstance() {
  instance.show();
}
