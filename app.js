console.log("test");

const thumbnailContainer = document.getElementById("thumbnail-container");
const largeImageContainer = document.getElementById("large-image-container");

const images = [
  { src: "./daisy.jpg", alt: "a jack russel terrier in long grass" },
  { src: "./onyxhorse.png", alt: "an ornamental horse" },
  { src: "./pinkflowers.png", alt: "a bouqet of pink flowers" },
  { src: "./reubenlying.png", alt: "an alsatian lying down" },
];

console.log(images);

function createThumbnails(thumbnail) {
  for (let i = 0; i < images.length; i++) {
    let image = document.createElement("img");
    image.src = thumbnail[i].src;
    image.alt = thumbnail[i].alt;
    image.className = "thumbnail";
    thumbnailContainer.appendChild(image);
    image.addEventListener("click", function () {
      console.log("clicked");
      largeImageContainer.innerHTML = null;
      const copyImage = image.cloneNode(true);
      largeImageContainer.appendChild(copyImage);
      copyImage.className = "copy-image";
    });
  }
}
createThumbnails(images);
