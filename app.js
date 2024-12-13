console.log("test");

const thumbnailContainer = document.getElementById("thumbnail-container");

const images = [
  { src: "./daisy.jpg", alt: "a jack russel terrier in long grass" },
  { src: "./onyxhorse.png", alt: "an ornamental horse" },
  { src: "./pinkflowers.png", alt: "a bouqet of pink flowers" },
  { src: "./reubenlying.png", alt: "an alsatian lying down" },
];

console.log(images);

function createThumbnails(image1) {
  for (let i = 0; i < images.length; i++) {
    let image1 = document.createElement("img");
    image1.src = images[i].src;
    image1.alt = images[i].alt;
    image1.className = "thumbnail1";
    thumbnailContainer.appendChild(image1);

    console.log("hi");
  }
}
createThumbnails();
