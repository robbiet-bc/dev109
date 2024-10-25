// Rob Taylor 10/24/2024 M05 - Bullseye (math problems)
// var table = 3;                             // Unit of table rt.rt make a prompt
var table = window.prompt("Enter a multiplier number: ")
var operator = 'Multiplication';              // Type of calculation
var i = 1;                                    // Set counter to 1
var msg = '<h2>' + operator + ' Table</h2>';  // Message on Board.


// rt.rt I spent a little time trying to make it so the user could select addition or multiplication 
// Seems like we could have used the "window.option" and ".add" to create a list and let them
// choose. But then I was getting in over my head.
/* if (operator === 'addition') {
  // Do addition
  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
} else { */
  // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
// }

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
