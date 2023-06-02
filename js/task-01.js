const totalCategories = document.getElementById("categories");
console.log(`Number of categories: ${totalCategories.children.length}`);

// const titleEl = document.querySelectorAll('h2');
// titleEl.forEach((listName) => {
//   console.lof(listName);
// });

const elems = document.querySelectorAll("h2,.ul");
elems.forEach((item) => {
  console.log(`Category: ${item.firstChild.textContent}`);
  console.log(
    `Elements: ${item.children[1]}`
  );
});

// const listEl = document.querySelectorAll("ul");
// listEl.forEach((numbers) => {
//   console.log(`Elements: ${numbers.children.length}`);
// });


// console.log(item.children.length);
  


// const elemsCount = document.querySelectorAll('li');
// elemsCount.forEach((count) => {
//   console.log(count.childNodes.lenght);
// });
// const categoriesArray = [...totalCategories]

//   .map(
//     (categories) => `Category: ${categories.children[0].textContent}
// Elements ${categories.children[1].children.length}`
//   )

//   .join("\n");
// console.log(categoriesArray);

// const totalCategories = document.querySelectorAll(".item");
// console.log(`Number of categories: ${totalCategories.length}`);

// const categoriesEl = document.getElementsByTagName('ul');
// const forEach (totalCategories => {
//   console.log(`Elements: ${categoriesEl.length}`);
// });
