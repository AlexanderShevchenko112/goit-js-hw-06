function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const nameOfColor = document.querySelector(".color");
const body = document.querySelector("body");
btnChangeColor.addEventListener(`click`, () => {
  body.style.backgroundColor = getRandomHexColor();
  nameOfColor.textContent = getRandomHexColor();
  console.log("Color: ", nameOfColor.textContent);
});
