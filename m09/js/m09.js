/************************************************************************/
/* Rob Taylor, DEV 109            11/21/2024               Module 09    */
/************************************************************************/
/*                            Main CSS including                        */
/************************************************************************/
// So, I think I could have simplified this. But it still isn't doing what
// I wanted... But close enough for now. That's why I did the containers 
// in html2...

// Prevent propagation for the "Clear" button
document.getElementById("clearButton").addEventListener("click", function (event) {
  // Clear all dots
  const dots = document.querySelectorAll(".dot, .square");
  dots.forEach(dot => dot.remove());

  // Let us stop the propagation of events

  event.stopPropagation();
});

// Prevent propagation for dropdowns
document.querySelectorAll("select").forEach(select => {
  select.addEventListener("click", function (event) {

  // Let us stop the propagation of events

  event.stopPropagation();
  });
});

// Prevent propagation for labels
document.querySelectorAll("label").forEach(label => {
  label.addEventListener("click", function (event) {

  // Let us stop the propagation of events

  event.stopPropagation();
  });
});


// Listener for the whole container
document.getElementById("container").addEventListener("click", function (event) {
  const size = document.getElementById("selectedSize").value;
  const shape = document.getElementById("selectedShape").value;
  const color = document.getElementById("selectedColor").value;

  const dot = document.createElement("div");

  if (shape === "circle") {
    dot.className = "dot";
  } else if (shape === "square") {
    dot.className = "square";
  }
  dot.style.background = color;
  dot.style.width = size + "px";
  dot.style.height = size + "px";
  dot.style.left = (event.pageX - 4) + "px";
  dot.style.top = (event.pageY - 4) + "px";
  document.body.appendChild(dot);
});

document.getElementById("directionsButton").addEventListener("click", function () {
  window.open("index2.html", "_blank");
});


// /////////////////////////////////////////////////////////////////////////////////////////////

// document.getElementById("clearButton").addEventListener("click", function (event) {


//   var element = document.getElementById("container");
//   for (index = element.length - 1; index >= 0; index--) {
//     element[index].parentNode.removeChild(element[index]);
//   }

//   // Let us stop the propagation of events

//   event.stopPropagation();
// });

// addEventListener("click", function (event) {
//   var dot = document.createElement("div");
//   var size = document.getElementById("selectedSize").selectedOptions[0].value;
//   var shape = this.document.getElementById("selectedShape").selectedOptions[0].value;

//   if (shape = "circle") {
//     dot.className = "dot";
//   } else {
//     dot.className = "square"
//   }
//   dot.style.background = document.getElementById("selectedColor").selectedOptions[0].value;
//   dot.style.width = size + "px";
//   dot.style.height = size + "px";
//   dot.style.left = (event.pageX - Math.floor(size / 2)) + "px";
//   dot.style.top = (event.pageY - Math.floor(size / 2)) + "px";
//   document.body.appendChild(dot);
// });