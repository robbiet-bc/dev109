// Generate a BingoCard
function generateBingoCard() {
  const bingoCard = document.getElementById("bingo-card");
  const headers = ['B', 'I', 'N', 'G', 'O'];
  const ranges = [
    { min: 1, max: 15 },
    { min: 16, max: 30 },
    { min: 31, max: 45 },
    { min: 46, max: 60 },
    { min: 61, max: 75 }
  ];

  // Create headers
  headers.forEach(letter => 
  {
    const headerCell = document.createElement("div");
    headerCell.className = "bingo-header";
    headerCell.textContent = letter;
    bingoCard.appendChild(headerCell);
  });

  // Generate numbers for each column
  const columnNumbers = [];
  for (let col = 0; col < 5; col++) {
    columnNumbers.push(generateUniqueNumbers(ranges[col].min, ranges[col].max, 5));
  }

  // Create rows and fill each column in each row
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      const cell = document.createElement("div");
      cell.className = "bingo-cell";
      if (row === 2 && col === 2)
      {
        cell.id = `FREE`;
        cell.textContent = `Free`;  
      } 
      else
      {
        const number = columnNumbers[col][row];
        cell.id = `${headers[col]}${number}`;
        cell.textContent = `${headers[col]}${number}`;
      }
      bingoCard.appendChild(cell);
    }
  }

  // mark the Free Cell
  freeCell = document.getElementById('FREE');  
  if (freeCell) {
    freeCell.classList.add("marked");
  }
}

function generateUniqueNumbers(min, max, count) {
  const numbers = new Set();
  while (numbers.size < count) {
    numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return Array.from(numbers);
}

function markNumber() {
  const input = document.getElementById("bingo-input");
  const inputValue = input.value.toUpperCase();
  const cell = document.getElementById(inputValue);
  
  if (cell) {
    cell.classList.add("marked");
  } else {
    alert(`${inputValue} is not on the board.`);
  }

  // Clear the input box
  input.value = "";

}

// Function to reset the Bingo card
function resetBingoCard() {
  const bingoCard = document.getElementById("bingo-card");
  bingoCard.innerHTML = ''; // Clear existing card
  generateBingoCard(); // Regenerate the card
}

// Event Listener so the user can just press ENTER to register the called number
// Add event listener for the "Enter" key after the DOM content loads
window.onload = function() {
  generateBingoCard();



  const inputElement = document.getElementById("bingo-input");
  inputElement.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      markNumber();
    }
  });
  // Add an event listener to the reset button
  document.getElementById("reset-button").addEventListener("click", resetBingoCard);

};