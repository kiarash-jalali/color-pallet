document.querySelector("html").style.backgroundImage = `linear-gradient(
      to right,#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")},#${Math.floor(Math.random() * 16777215)
  .toString(16)
  .padStart(6, "0")}
    )`;
function directionRand() {
  let index = Math.random();
  let direction = "";
  if (index <= 0.5) {
    direction = "right";
  } else if (index > 0.5) {
    direction = "top";
  }
  return direction;
}
function getRandomHexColor() {
  let randomColor1 = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  let randomColor2 = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  document.querySelector("html").style.backgroundImage = `linear-gradient(
      to ${directionRand()},#${randomColor1},#${randomColor2}
    )`;
  document.querySelector("body").style.transition =
    "background-image 0.2s ease-in-out";
}
setInterval(() => {
  getRandomHexColor();
}, 500);
