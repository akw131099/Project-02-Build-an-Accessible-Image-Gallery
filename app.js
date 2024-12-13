console.log("test");

const thumbnailContainer = document.getElementById("thumbnail-container");
const largeImageContainer = document.getElementById("large-image-container");

const images = [
  { src: "./daisy.jpg", alt: "a jack russel terrier in long grass" },
  { src: "./onyxhorse.png", alt: "an ornamental horse" },
  { src: "./pinkflowers.png", alt: "a bouqet of pink flowers" },
  { src: "./reubenlying.png", alt: "an alsatian lying down" },
];

let copyImage = document.createElement("img");
copyImage.src = images[0].src;
copyImage.alt = images[0].alt;
copyImage.className = "copy-image";
largeImageContainer.appendChild(copyImage);

function createThumbnails(thumbnail) {
  for (let i = 0; i < images.length; i++) {
    let image = document.createElement("button");
    let buttonImage = document.createElement("img");

    image.appendChild(buttonImage);

    buttonImage.src = thumbnail[i].src;
    buttonImage.alt = thumbnail[i].alt;
    image.className = "thumbnail";
    buttonImage.className = "thumbnail-image";

    thumbnailContainer.appendChild(image);

    image.addEventListener("click", function () {
      largeImageContainer.innerHTML = null;
      copyImage.src = thumbnail[i].src;
      copyImage.alt = thumbnail[i].alt;
      largeImageContainer.appendChild(copyImage);
    });
  }
}

createThumbnails(images);
