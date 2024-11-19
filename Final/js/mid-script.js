// A list of images in my GitHub
// JavaScript to populate the image grid
const imagePaths = [
  '../a2/images/black-bishop.png',
  '../a2/images/gold-bishop.png',
  '../a3/images/geometric-grey-background.avif',
  '../m01/images/Agua-de-Horchata-2.jpg',
  '../m01/images/Albondigas-Mexican-Meatballs-2.jpg',
  '../m01/images/German-Apple-Tart.jpg',
  '../m01/images/Mauritian-Chicken-Curry.jpg',
  '../m01/images/Pan-Seared-Salmon-Close-up.jpg',
  '../m01/images/Tallarin-Verde.jpg',
  '../m04/images/forest-green.png',
  '../m04/images/lite-green.png',
  '../m05/images/bullseye-logo.png',
  '../m05/images/teacher.png',
  '../Final/images/grow-deep.png',
  '../Final/images/soft-greens.png',
  '../Final/images/taylor-made.png',
  '../Final/images/taylor-office.png'
];

// Select the grid container
const gridContainer = document.getElementById("artifacts-grid");

// Iterate over each image path
imagePaths.forEach((path) => {
  const imgElement = document.createElement("img"); // Create an image element
  imgElement.src = path; // Set the image source
  imgElement.alt = "Image" + path; // Set alt text for accessibility
  imgElement.loading = "lazy"; // Use lazy loading for better performance
  gridContainer.appendChild(imgElement); // Add image to the grid container
});