const images = [
  "images/nature-1.jpg",
  "images/nature-2.jpg",
  "images/nature-3.jpg",
  "images/nature-4.jpg",
  "images/nature-5.jpg",
  "images/nature-6.jpg",
  "images/nature-7.jpg",
  "images/nature-8.jpg",
  "images/nature-9.jpg",
];

let imageIndex = 0;
const img = document.getElementById("carousel-image");

setInterval(() => {
  if (imageIndex === images.length) {
    imageIndex = 0;
  }
  const imageLink = images[imageIndex];
  img.setAttribute("src", imageLink);
  imageIndex++;
}, 1500);
