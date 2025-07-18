function getRandomHexColor(i) {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let color = randomColor.padStart(6, "0").toUpperCase();
  let r = color.charAt(0) + color.charAt(1);
  let g = color.charAt(2) + color.charAt(3);
  let b = color.charAt(4) + color.charAt(5);
  let luminance =
    0.299 * parseInt(r, 16) + 0.587 * parseInt(g, 16) + 0.114 * parseInt(b, 16);
  if (luminance > 128) {
    document.querySelector(`.color-pallet-button${i}`).style.color = "black";
  } else {
    document.querySelector(`.color-pallet-button${i}`).style.color = "white";
  }
  document.querySelector(`.color-pallet-button${i}`).innerHTML = `${color}`;
  return `#${color}`;
}
function makeRandomColor() {
  for (let i = 1; i <= 5; i++) {
    document.querySelector(
      `.color-pallet-container${i}`
    ).style.backgroundColor = getRandomHexColor(i);
    document.querySelector(`.color-pallet-container${i}`).style.transition =
      "all 0.1s ease-in-out";
  }
}

document.querySelector("body").addEventListener("keydown", (event) => {
  if (event.key === " ") {
    makeRandomColor();
  }
});

document.querySelectorAll(".buttons").forEach((button) => {
  button.addEventListener("click", () => {
    const text = button.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  });
});
