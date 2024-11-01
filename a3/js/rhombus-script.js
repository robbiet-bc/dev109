// Rob Taylor Dev 109  10/31/2024

function createRhombus(pHeight, pColor2, pColor1, pSymbol) {
  // Set pHeight to be at least 3 and at most 30
  pHeight = Math.max(3, Math.min(pHeight, 30));
  upLeft(pHeight, pColor2, pColor1, pSymbol);    // Draw upper Left Triangle
  upRight(pHeight, pColor2, pColor1, pSymbol);   // Draw Upper Right Triangle
  downLeft(pHeight, pColor2, pColor1, pSymbol);  // Draw Lower Left Triangle
  downRight(pHeight, pColor2, pColor1, pSymbol); // Draw lower Right Triangle

}

function upLeft(pHeight, pColor2, pColor1, pSymbol) {
  var rLine = "";
  var lRepeat = 2; // My thought was I might change this depending on the width of the character, but I didn't.
  
  for (i = 0; i < pHeight; i++) {
    rLine += "";
    //Create each line on the Rhombus
    for (j = 0; j <= i; j++) {

      // I modified all these to outline the rhombus
      if (j === 0)
        rLine += "<span style='color:" + pColor2 + ";'>" + pSymbol.repeat(lRepeat) + "</span>";
      else
        rLine += "<span style='color:" + pColor1 + ";'>" + pSymbol.repeat(lRepeat) + "</span>";

    }
    rLine += "<br>";
    // console.log(rLine);

  }

  document.getElementById("upLeft").innerHTML = rLine;
}

function upRight(pHeight, pColor2, pColor1, pSymbol) {
  var rLine = "";
  var lRepeat = 2;

  for (i = 0; i < pHeight; i++) {
    rLine += "";
    //Create each line on the Rhombus
    for (j = 0; j <= i; j++) {

      // I modified all these to outline the rhombus
      if (j===i)
        rLine += "<span style='color:" + pColor1 + ";'>" + pSymbol.repeat(lRepeat) + "</span>";
      else
        rLine += "<span style='color:" + pColor2 + ";'>" + pSymbol.repeat(lRepeat) + "</span>";

    }
    rLine += "<br>";
    // console.log(rLine);

  }

  document.getElementById("upRight").innerHTML = rLine;
}

function downRight(pHeight, pColor2, pColor1, pSymbol) {
  var rLine = "";
  var lRepeat = 2;

  for (i = pHeight; i > 0; i--) {
    rLine += "";
    //Create each line on the Rhombus
    for (j = 0; j < i; j++) {

      // I modified all these to outline the rhombus
      if (((j+1)===(i)))
        rLine += "<span style='color:" + pColor2 + ";'>" + pSymbol.repeat(lRepeat) + "</span>";
      else
        rLine += "<span style='color:" + pColor1 + ";'>" + pSymbol.repeat(lRepeat) + "</span>";

    }
    rLine += "<br>";
    // console.log(rLine);

  }

  document.getElementById("downRight").innerHTML = rLine;
}

function downLeft(pSize, pColor1, pColor2, pSymbol) {
  var rLine = "";
  var lRepeat = 2;

  for (i = pSize; i > 0; i--) {
    rLine += "";
    for (j = 0; j < i; j++) {

      // I modified all these to outline the rhombus
      if (j===0)
        rLine += "<span style='color:" + pColor2 + ";'>" + pSymbol.repeat(lRepeat) + "</span>";
      else
        rLine += "<span style='color:" + pColor1 + ";'>" + pSymbol.repeat(lRepeat) + "</span>";
    }
    rLine += "<br>";
  }

  document.getElementById("downLeft").innerHTML = rLine;

}

// I'm loading the first Rhombus with "#" 
window.onload = function() {
  createRhombus(5, "Yellow", "Silver", "#");

};