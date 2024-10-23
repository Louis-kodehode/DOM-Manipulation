const displayCounter = document.querySelector("#counter");
const btnUp = document.querySelector(".btn-up");
const btnDown = document.querySelector(".btn-down");

let counterValue = 0;

btnUp.addEventListener("click", () => {
  counterValue++;
  displayCounter.textContent = counterValue;
  displayCounter.style.backgroundColor = "violet";
});

btnDown.addEventListener("click", () => {
  counterValue--;
  displayCounter.textContent = counterValue;
  displayCounter.style.backgroundColor = `${"red"}`;
});
