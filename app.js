console.log("test");

const thumbnailContainer = document.getElementById("thumbnail-container");

const images = [
  { src: "./daisy.jpg", alt: "a jack russel terrier in long grass" },
  { src: "./onyxhorse.png", alt: "an ornamental horse" },
  { src: "./pinkflowers.png", alt: "a bouqet of pink flowers" },
  { src: "./reubenlying.png", alt: "an alsatian lying down" },
];

console.log(images);

function createThumbnails(image1, image2, image3, image4) {
  for (i = 0; i < images.length; i++) {
    image1 = document.createElement("img");
    image1.src = images[0].src;
    image1.alt = images[0].alt;
    image1.className = "thumbnail";
    thumbnailContainer.appendChild(image1);

    image2 = document.createElement("img");
    image2.src = images[1].src;
    image2.alt = images[1].alt;
    image2.className = "thumbnail";
    thumbnailContainer.appendChild(image2);

    image3 = document.createElement("img");
    image3.src = images[2].src;
    image3.alt = images[2].alt;
    image3.className = "thumbnail";
    thumbnailContainer.appendChild(image3);

    image4 = document.createElement("img");
    image4.src = images[3].src;
    image4.alt = images[3].alt;
    image4.className = "thumbnail";
    thumbnailContainer.appendChild(image4);
  }
}
createThumbnails("daisy", "horse", "flowers", "reuben");
