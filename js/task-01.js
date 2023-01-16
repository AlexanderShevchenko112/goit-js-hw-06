const liItems = document.querySelectorAll(".item");
console.log("Number of categories", liItems.length);

const numberOfLiElements = liItems.forEach((liItem) => {
  console.log("Category: ", liItem.querySelector("h2").textContent);
  console.log("Elements: ", liItem.querySelectorAll("li").length);
});
