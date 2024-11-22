import { renderHeader } from "./Render/renderHeader.js";
import { renderCalculator } from "./Render/renderCalculator.js";

let calculation = [];

renderHeader();
renderCalculator();
calculator();
getFromStorage();
generateHistory();

function calculator() {
  // Vars
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

  // On Key Events
  document.body.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      generateHistory();

      setTimeout(() => {
        equal();
      });
    }
    if (event.key === "Backspace") {
      clear();
    }
  });

  // Equal Event
  equalBtn.addEventListener("click", () => {
    generateHistory();

    setTimeout(() => {
      equal();
    }, 1);
  });

  // Misc Events
  clearBtn.addEventListener("click", () => clear());
  clearAllBtn.addEventListener("click", () => clearHistory());
  showHistoryBtn.addEventListener("click", () => showHistory());

  // Nums Events
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

  // Calculate Events
  dotBtn.addEventListener("click", () => calculate("."));
  devideBtn.addEventListener("click", () => calculate(" / "));
  multiplyBtn.addEventListener("click", () => calculate(" * "));
  minusBtn.addEventListener("click", () => calculate(" - "));
  plusBtn.addEventListener("click", () => calculate(" + "));
}

// Calculate Fun
function calculate(sign) {
  const calculationDisplay = document.querySelector(".js-input-display");
  let calculationSign = sign;

  calculationDisplay.value += calculationSign;

  calculation.push(calculationSign);
  saveToStorage();
}

// Clear Fun
function clear() {
  const calculationDisplay = document.querySelector(".js-input-display");
  calculationDisplay.value = "";
}

// Equal Fun
function equal() {
  const calculationDisplay = document.querySelector(".js-input-display");
  const historyContainer = document.querySelector(".js-history-container");
  const calcArray = Array.from(calculationDisplay.value);

  calcArray.forEach((val, i) => {
    if (val == " ") {
      calcArray.splice(i, 4);
      const calc = calcArray.join("");

      if (calculationDisplay.value == `${calc} / 0`) {
        historyContainer.lastElementChild.remove();
        historyContainer.lastElementChild.remove();
        calculation.splice(calculation.length - 1, 6);
        calculationDisplay.value =  "You can't divide by zero";
        saveToStorage();
      } else {
        calculationDisplay.value = eval(calculationDisplay.value);
        saveToStorage();
        generateHistory();
      }
    }
  });
}

// Clear History
function clearHistory() {
  const calculationDisplay = document.querySelector(".js-input-display");
  calculationDisplay.value = "";

  const historyContainer = document.querySelector(".js-history-container");
  historyContainer.innerHTML = "";
  calculation = [];

  localStorage.removeItem("calculation");
  saveToStorage();
}

// Save Storage
function saveToStorage() {
  const calculationDisplay = document.querySelector(".js-input-display");
  const historyContainer = document.querySelector(".js-history-container");

  localStorage.setItem("calculation", calculationDisplay.value);
  localStorage.setItem("calculationHistory", JSON.stringify(calculation));
  localStorage.setItem(
    "historyContainer",
    JSON.stringify(historyContainer.innerHTML),
  );
}

// Generate History
function generateHistory() {
  const calculationDisplay = document.querySelector(".js-input-display");
  const historyContainer = document.querySelector(".js-history-container");

  calculation.push(calculationDisplay.value);
  const lastCalcVal = calculation[calculation.length - 1]

  /* TEMP
    const calculationSet = new Set(calculation);
    const uniqueCalculation = [...calculationSet];
    const lastValue = uniqueCalculation[uniqueCalculation.length - 1];
  */

  historyContainer.innerHTML += `
    <p class="calculation-value">${lastCalcVal}</p>
    <hr>
  `;
}

// Get Storage
function getFromStorage() {
  const calculationDisplay = document.querySelector(".js-input-display");
  const historyContainer = document.querySelector(".js-history-container");
  calculationDisplay.value = localStorage.getItem("calculation");
  const storedCalculation = localStorage.getItem("calculationHistory");

  if (storedCalculation) {
    calculation = JSON.parse(storedCalculation);
  } else {
    calculation = [];
  }
  historyContainer.innerHTML =
    JSON.parse(localStorage.getItem("historyContainer")) || ``;
}

// Show History
function showHistory() {
  const history = document.querySelector(".js-history");
  history.classList.toggle("hide");
}
