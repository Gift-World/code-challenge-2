document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (shopping) => {
    shopping.preventDefault();
    shoppingList(shopping.target.shopped.value);
  });
});

function shoppingList(tobuy) {
  let l = document.createElement("li");
  let del = document.createElement("button");
  let mark = document.createElement("button");
  let edit = document.createElement("button");

  del.addEventListener("click", toDelete);
  del.textContent = "remove";
  l.textContent = `${tobuy}`;
  l.appendChild(del);
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
function toDelete(shopping) {
  shopping.target.parentNode.remove();
}
function toMarkPurchased(mark) {
  mark.target.parentNode.style.textDecoration = "line-through";
  mark.target.parentNode.style.color = "red";
}
