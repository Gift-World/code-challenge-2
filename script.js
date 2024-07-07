document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (shopping) => {
    shopping.preventDefault();
    shoppingList(shopping.target.shopped.value);
  });
});
// Function for adding items to the list
function shoppingList(tobuy) {
  let l = document.createElement("li"); // creates a list element
  let del = document.createElement("button");
  let mark = document.createElement("button");
  let edit = document.createElement("button");

  del.addEventListener("click", toDelete);
  del.textContent = "remove";
  l.textContent = `${tobuy}`;
  l.appendChild(del);
  // styles the listed items with a different output
  l.style.color = "orange";
  l.style.fontSize = "20px";
  l.style.fontStyle = "italic";
  l.style.fontWeight = "160px";

  mark.textContent = "purchased";
  mark.addEventListener("click", toMarkPurchased);

  l.appendChild(mark);
  edit.textContent = "Edit";
  edit.addEventListener("click", () => editingList);
  l.appendChild(edit);

  document.querySelector("#shopping").appendChild(l);
}
//Function to remove any desired item from the existing list.
function toDelete(shopping) {
  shopping.target.parentNode.remove();
}
//Function to update the item incase purchased to change color and be cancelled
function toMarkPurchased(mark) {
  mark.target.parentNode.style.textDecoration = "line-through";
  mark.target.parentNode.style.color = "red";
}
//Clearing all existing items from the list
const clearListButton = document.getElementById("clear_list");
const myList = document.getElementById("shopping");
clearListButton.addEventListener("click", () => {
  myList.innerHTML = "";
});
