console.log("test");

const thumbnailContainer = document.getElementById("thumbnail-container");
const largeImageContainer = document.getElementById("large-image-container");

const images = [
  { src: "./daisy.jpg", alt: "a jack russel terrier in long grass" }, //alt text for accessibility, important for screen readers
  { src: "./onyxhorse.png", alt: "an ornamental horse" },
  { src: "./pinkflowers.png", alt: "a bouqet of pink flowers" },
  { src: "./reubenlying.png", alt: "an alsatian lying down" },
];

let copyImage = document.createElement("img");
copyImage.src = images[0].src; //largeImageContainer will always display image 1 upon loading the page
copyImage.alt = images[0].alt;
copyImage.className = "copy-image";
largeImageContainer.appendChild(copyImage); //makes sure the page isn't blank when loaded

function createThumbnails(thumbnail) {
  for (let i = 0; i < images.length; i++) {
    let image = document.createElement("button"); //declaring a button to wrap the img in
    let buttonImage = document.createElement("img"); //then declaring the img, assigning both to variables

    image.appendChild(buttonImage);

    buttonImage.src = thumbnail[i].src; //the loop goes through the images array (represented by thumbnail here) and selects whatever value [i] is on.
    buttonImage.alt = thumbnail[i].alt;
    image.className = "thumbnail";
    buttonImage.className = "thumbnail-image"; //class names for CSS styling

    thumbnailContainer.appendChild(image);

    image.addEventListener("click", function () {
      //adding an event listener to perform an action when clicked
      largeImageContainer.innerHTML = null; //this function first clears the content inside largeImageContainer
      copyImage.src = thumbnail[i].src; //then pulls src and alt from the loop
      copyImage.alt = thumbnail[i].alt;
      largeImageContainer.appendChild(copyImage); //finally, places new image in largeImageContainer
    });
  }
}

createThumbnails(images); //calling the function to generate thumbnails upon loading the page
