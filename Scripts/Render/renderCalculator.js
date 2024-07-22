export function renderCalculator() {
  const calculatorHTML = document.querySelector(".js-calculator");
  calculatorHTML.innerHTML += `
    <div class="calculator-body">
      <div class="calculation-display">
        <input type="text" name="display" class="input-display js-input-display"/>
      </div>

      <div class="calculator-btns">
        <div class="top-btns">
          <button class="top-btn secondary-btn clear-btn js-clear-btn">Clear</button>
          <button class="semi-mid-btn secondary-btn js-clear-all-btn">CA</button>
          <button class="bot-btn secondary-btn js-show-history-btn">His</button>
        </div>
        
        <div class="semi-top-btns">
          <button class="semi-top-btn primary-btn js-seven-btn">7</button>
          <button class="semi-top-btn primary-btn js-eight-btn">8</button>
          <button class="semi-top-btn primary-btn js-nine-btn">9</button>
          <button class="semi-top-btn secondary-btn js-minus-btn">-</button>
        </div>

        <div class="mid-btns">
          <button class="mid-btn primary-btn js-four-btn">4</button>
          <button class="mid-btn primary-btn js-five-btn">5</button>
          <button class="mid-btn primary-btn js-six-btn">6</button>
          <button class="mid-btn secondary-btn js-plus-btn">+</button>
        </div>

        <div class="semi-mid-btns">
          <button class="semi-mid-btn primary-btn js-one-btn">1</button>
          <button class="semi-mid-btn primary-btn js-two-btn">2</button>
          <button class="semi-mid-btn primary-btn js-three-btn">3</button>
          <button class="top-btn secondary-btn js-multiply-btn">X</button>
        </div>

        <div class="bot-btns">
          <button class="bot-btn primary-btn js-zero-btn">0</button>
          <button class="bot-btn primary-btn js-dot-btn">.</button>
          <button class="bot-btn primary-btn equal-btn js-equal-btn">=</button>
          <button class="top-btn secondary-btn js-devide-btn">/</button>
        </div>
      </div>
    </div>

    <div class="history js-history">
      <h1 class="history-title">History</h1>
    </div>
  `;
}
