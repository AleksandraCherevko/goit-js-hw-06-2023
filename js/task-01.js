const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
console.log(items);
items.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
