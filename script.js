function changeText() {
  const textElement = document.getElementById("change-text");
  textElement.textContent = "🎉 The text has been updated!";
}

function changeStyle() {
  const styleElement = document.getElementById("style-target");
  styleElement.classList.toggle("highlight");
}

function addItem() {
  const ul = document.getElementById("item-list");
  const newItem = document.createElement("li");
  newItem.textContent = "New Item " + (ul.children.length + 1);
  ul.appendChild(newItem);
}

function removeItem() {
  const ul = document.getElementById("item-list");
  if (ul.lastElementChild) {
    ul.removeChild(ul.lastElementChild);
  }
}
