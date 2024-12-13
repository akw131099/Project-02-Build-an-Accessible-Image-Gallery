console.log("test");

const thumbnailContainer = document.getElementById("thumbnail-container");

const images = [
  { daisy: { src: "./daisy.jpg", alt: "a jack russel terrier in long grass" } },
  { onyxHorse: { src: "./onyxhorse.png", alt: "an ornamental horse" } },
  {
    pinkFlowers: { src: "./pinkflowers.png", alt: "a bouqet of pink flowers" },
  },
  { reuben: { src: "./reubenlying.png", alt: "an alsatian lying down" } },
];

function createThumbnails(imageArray) {
  for (i = 0; i <= images.length; i++) {
    let imageDaisy = images.daisy;
    let imageHorse = images.onyxHorse;
    let imageFlowers = images.pinkFlowers;
    let imageReuben = images.reuben;
    console.log(i);
  }
}
createThumbnails();
