function addItem() {
  var newItem = document.getElementById('items').value;

  // Don't put empty stuff on the list.
  if (newItem.trim() === "") {
    alert("Please enter an item.");
    return;
  }
  // Create a new element and store it in a variable.
  var newEl = document.createElement('li');

  // Create a text node and store it in a variable.
  var newText = document.createTextNode(newItem);

  // Attach the new text node to the new element.
  newEl.appendChild(newText);

  // Find the position where the new element should be added.
  var position = document.getElementsByTagName('ul')[0];

  // Insert the new element into its position.
  position.appendChild(newEl);

  // Extra Credit - Clear the input field after adding the item 
  // I didn't know the placeholder would come back... bonus.
  document.getElementById('items').value = "";
}