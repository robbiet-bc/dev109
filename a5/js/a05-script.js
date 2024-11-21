const carouselData = [
  { src: "images/Agua-de-Horchata.jpg", desc: "Agua de Horchata" },
  { src: "images/Albondigas-Mexican-Meatballs.jpg", desc: "Albondigas - Mexican Meatballs" },
  { src: "images/German-Apple-Tart.jpg", desc: "German Apple Tart" },
  { src: "images/Mauritian-Chicken-Curry.jpg", desc: "Mauritian Chicken Curry" },
  // { src: "images/Pan-Seared-Salmon.jpg", desc: "Pan-Seared Salmon" }, // only 5 img
  { src: "images/Tallarin-Verde.jpg", desc: "Tallarin Verde" }
];

// Dynamically build the carousel
const carouselContainer = document.getElementById("carousel");
const prevButtonx = document.querySelector(".carouselButtonLeft");
const nextButtonx = document.querySelector(".carouselButtonRight");
const prevButton = document.querySelector("#btnLeft");
const nextButton = document.querySelector("#btnRight");

carouselData.forEach((item, index) => {
  // Create image element
  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.desc;
  img.className = "mySlides";
  img.style.display = index === 0 ? "block" : "none"; // If then for first image
  carouselContainer.appendChild(img);

  // Create description element
  const desc = document.createElement("p");
  desc.textContent = item.desc;
  desc.className = "myDescs";
  desc.style.display = index === 0 ? "block" : "none"; // if then for first descriptoin
  carouselContainer.appendChild(desc);
});

// Carousel functionality
let currentIndex = 0;
let carouselInterval;
let intervalTime = 3000; // Default (ms)

// Function to start the carousel
function startCarousel() {
  carouselInterval = setInterval(nextSlide, intervalTime);
}

// Function to reset the interval if btn clicked
function resetCarousel() {
  clearInterval(carouselInterval); // Stop the current interval
  startCarousel(0);                // Start a new interval, don't increment
}

// Function to update the interval based on input (bonus, right?)
function updateInterval() {
  const userInterval = parseInt(document.getElementById("intervalInput").value, 10);
  
  if (!isNaN(userInterval) && userInterval >= 1) {
    intervalTime = userInterval * 1000;
    resetCarousel(); // Restart the carousel with the new interval
  } else {
    alert("Please enter a valid number (minimum 1 second)");
  }
}

function showSlide(index) {
  const slides = document.querySelectorAll(".mySlides");
  const descriptions = document.querySelectorAll(".myDescs");
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
  descriptions.forEach((desc, i) => {
    desc.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselData.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
  showSlide(currentIndex);
}

// to meet the requirement that this is a listening event, not directly called.
// Attach event listeners
document.getElementById("setIntervalButton").addEventListener("click", updateInterval);
document.querySelector("#btnLeft").addEventListener("click", () => {
  prevSlide();
  resetCarousel();
});

document.querySelector("#btnRight").addEventListener("click", () => {
  nextSlide();
  resetCarousel();
});

// Start the carousel on page load
window.onload = startCarousel;