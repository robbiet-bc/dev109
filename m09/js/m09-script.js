/************************************************************************/
/* Rob Taylor, DEV 109            11/21/2024               Module 09    */
/************************************************************************/
/*                            Main CSS including                        */
/************************************************************************/
// DOM elements
const canvas = document.getElementById("drawingCanvas");
const leftMargin = document.getElementById("leftMargin");
const footer = document.getElementById("footer");

// input fields
const selectWidth = document.getElementById('selectWidth');
const selectHeight = document.getElementById('selectHeight');
const setCanvasSizeButton = document.getElementById('setCanvasSize');
const selectedColor = document.getElementById("selectedColor");
const selectedShape = document.getElementById("selectedShape");
const selectedSize = document.getElementById("selectedSize");

// context
const ctx = canvas.getContext("2d");

// Set default brush settings
let color = selectedColor.value;
let shape = selectedShape.value;
let size = selectedSize.value;
let minWidth = 300;
let minHeight = 300;

// Update brush settings
selectedColor.addEventListener("change", () => {
  color = selectedColor.value;
});

selectedShape.addEventListener("change", () => {
  shape = selectedShape.value;
});

selectedSize.addEventListener("change", () => {
  size = selectedSize.value;
});

// Clear canvas Start Over
document.getElementById("clearButton").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear everything
  canvas.width = minWidth;                          // reset W x H
  canvas.height = minHeight;
  resizeCanvas();
});

// Handle canvas click
canvas.addEventListener("click", function (event) {
  const rect = canvas.getBoundingClientRect();  // Get canvas position and dimensions
  const x = event.clientX - rect.left;          // Adjust x-coordinate
  const y = event.clientY - rect.top;           // Adjust y-coordinate

  console.log("rect:" + " x:"+ x + " y:" + y + " size:" + size + " left:" + rect.left + " top:" + rect.top + "!!");

  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = size;

  if (shape === "circle") {
    ctx.beginPath();
    ctx.arc(x, y, size / 2, 0, Math.PI * 2);
    ctx.fill();
  } else if (shape === "square") {
    ctx.fillRect(x - size / 2, y - size / 2, size, size);
  } else if (shape === "triangle") {
    const halfSize = size / 2;
    const topVertex = { x: x, y: y - size };        // Top point
    const leftVertex = { x: x - halfSize, y: y };   // Bottom-left point
    const rightVertex = { x: x + halfSize, y: y };  // Bottom-right point

    // draw it
    ctx.beginPath();
    ctx.moveTo(topVertex.x, topVertex.y);     // Move to the top vertex
    ctx.lineTo(leftVertex.x, leftVertex.y);   // Draw line to bottom-left vertex
    ctx.lineTo(rightVertex.x, rightVertex.y); // Draw line to bottom-right vertex
    ctx.closePath();
    ctx.fill();
  }
});

// Sync canvas width and height to its actual display size (This drove me nuts)
function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

// Event listener for setting canvas size
setCanvasSizeButton.addEventListener('click', function () {
  const newWidth = parseInt(selectWidth.value, 10);
  const newHeight = parseInt(selectHeight.value, 10);

  // Validate input to ensure it's within allowed range
  if (newWidth >= minWidth && newHeight >= minHeight) {
    canvas.width = newWidth;
    canvas.height = newHeight;
    resizeCanvas();
  } else {
    alert("Please enter a valid size (minimum 300px for width and height).");
    /* OK On my screen, the left margin eats up about 250px. If I set the canvas to anything 
       less, I have nightmare issues with the drawing. I don't understand. BUT, if we stick to
       a canvas of at least 300px, I don't run into that problem.
    */
  }
});

// Handle clicks outside the canvas
leftMargin.addEventListener("click", () => {
  // alert("Don't click in the left margin!");
});

footer.addEventListener("click", () => {
  // alert("Don't click in the footer!");
});

document.getElementById("directionsButton").addEventListener("click", function () {
  window.open("index.html", "_blank");
});

