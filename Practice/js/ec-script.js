/************************************************************************/
/* Rob Taylor, DEV 109            11/25/2024              EC I SPY GAME */
/************************************************************************/
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll("#gameContainer a");
  const foundCountSpan = document.getElementById("foundCount");
  let foundCount = 0;

  function foundItem(title) {
    /* I kind of feel like I'm cheating because if you find an element on the
       screen, the title will pop up. So it's a good clue. Like on Kitty  */
    const item = [...items].find(el => el.title === title);

    if (item && !item.style.textDecoration) {

      // Mark the clickable area
      item.style.textDecoration = "line-through"; // This doesn't seem to work.
      item.style.pointerEvents = "none"; // Prevent multiple clicks this works.
      
      // Mark the corresponding list item
      const listItem = document.getElementById(`${title}-item`);
      if (listItem) {
        listItem.style.textDecoration = "line-through";
      }

      foundCount++;
      foundCountSpan.textContent = foundCount;

      // Check if the game is complete
      if (foundCount === items.length) {
        if (confirm("You've found all items! Play again?")) {
          location.reload();
        }
      }
    }
  }

  items.forEach(item => {
    item.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent a href navigation
      foundItem(item.title);
    });
  });
});
