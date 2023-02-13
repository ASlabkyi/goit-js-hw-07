import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");
let lightbox = null;

galleryListEl.innerHTML = createGalleryList(galleryItems);
galleryListEl.addEventListener("click", handleImgClick);

function createGalleryList(element) {
  return element
    .map(
      ({ original, preview, description }) => `
   <div class="gallery__item">
   <a class="gallery__item" href=${original}>
   <img class="gallery__image" src=${preview} alt=${description} />
 </a>
        </div>
   `
    )
    .join("");
}

function handleImgClick(e) {
  e.preventDefault();

  if (checkIfImg(e.target)) return;

  createLightbox();
}

function checkIfImg(element) {
  return element.nodeName !== "IMG";
}

function createLightbox() {
  lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt",
  });
}
