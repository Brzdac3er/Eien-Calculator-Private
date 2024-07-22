import { renderHeader } from "./Render/renderHeader.js";
import { renderCalculator } from "./Render/renderCalculator.js";

renderHeader();
renderCalculator();

function calculator() {
  const equalBtn = document.querySelector(".js-equal-btn"); 
  const clearBtn = document.querySelector(".js-clear-btn"); 
  const clearAllBtn = document.querySelector(".js-clear-all-btn");
  const showHistoryBtn = document.querySelector(".js-show-history-btn");

  const nineBtn = document.querySelector(".js-nine-btn");
  const eightBtn = document.querySelector(".js-eight-btn");
  const sevenBtn = document.querySelector(".js-seven-btn");
  const sixBtn = document.querySelector(".js-six-btn");
  const fiveBtn = document.querySelector(".js-five-btn");
  const fourBtn = document.querySelector(".js-four-btn");
  const threeBtn = document.querySelector(".js-three-btn");
  const twoBtn = document.querySelector(".js-two-btn");
  const oneBtn = document.querySelector(".js-one-btn");
  const zeroBtn = document.querySelector(".js-zero-btn");

  const dotBtn = document.querySelector(".js-dot-btn");
  const devideBtn = document.querySelector(".js-devide-btn");
  const multiplyBtn = document.querySelector(".js-multiply-btn");
  const minusBtn = document.querySelector(".js-minus-btn");
  const plusBtn = document.querySelector(".js-plus-btn");


  document.body.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      equal();
    }
    if (event.key === "Backspace") {
      clear();
    }
  });
  equalBtn.addEventListener("click", () => equal());
  clearBtn.addEventListener("click", () => clear());
  clearAllBtn.addEventListener("click", () => clearHistory());
  showHistoryBtn.addEventListener("click", () => showHistory());

  nineBtn.addEventListener("click", () => calculate("9"));
  eightBtn.addEventListener("click", () => calculate("8"));
  sevenBtn.addEventListener("click", () => calculate("7"));
  sixBtn.addEventListener("click", () => calculate("6"));
  fiveBtn.addEventListener("click", () => calculate("5"));
  fourBtn.addEventListener("click", () => calculate("4"));
  threeBtn.addEventListener("click", () => calculate("3"));
  twoBtn.addEventListener("click", () => calculate("2"));
  oneBtn.addEventListener("click", () => calculate("1"));
  zeroBtn.addEventListener("click", () => calculate("0"));

  dotBtn.addEventListener("click", () => calculate("."));
  devideBtn.addEventListener("click", () => calculate(" / "));
  multiplyBtn.addEventListener("click", () => calculate(" * "));
  minusBtn.addEventListener("click", () => calculate(" - "));
  plusBtn.addEventListener("click", () => calculate(" + "));
}

function calculate(sign) {
  const calculationDisplay = document.querySelector(".js-input-display");
  let calculation = sign;

  calculationDisplay.value += calculation;
  saveToStorage();
}

function clear() {
  const calculationDisplay = document.querySelector(".js-input-display");

  calculationDisplay.value = "";
}

function equal() {
  const calculationDisplay = document.querySelector(".js-input-display");

  calculationDisplay.value = eval(calculationDisplay.value);
  saveToStorage();
}

function clearHistory() {
  const calculationDisplay = document.querySelector(".js-input-display");
  calculationDisplay.value = "";

  localStorage.removeItem("calculation");
  saveToStorage();
}

function saveToStorage() {
  const calculationDisplay = document.querySelector(".js-input-display");
  localStorage.setItem("calculation", calculationDisplay.value);
}

function getFromStorage() {
  const calculationDisplay = document.querySelector(".js-input-display");
  calculationDisplay.value = localStorage.getItem("calculation"); 
}

function showHistory() {
  const historyContainer = document.querySelector(".js-history");
  historyContainer.classList.toggle("hide");

  historyContainer.innerHTML += `
    <p></p>
  `;
}

getFromStorage();
calculator();
