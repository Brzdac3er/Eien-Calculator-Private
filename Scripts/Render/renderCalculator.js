export function renderCalculator() {
  const calculatorHTML = document.querySelector(".js-calculator");
  calculatorHTML.innerHTML += `
    <div class="calculator-body">
      <div class="calculation-display">
        <input type="text" name="display" placeholder="0" class="input-display"/>
      </div>

      <div class="calculator-btns">
        <div class="top-btns">
          <button class="top-btn secondary-btn clear-btn">Clear</button>
          <button class="top-btn secondary-btn">√</button>
          <button class="top-btn secondary-btn">/</button>
          <button class="top-btn secondary-btn">X</button>
        </div>
        
        <div class="semi-top-btns">
          <button class="semi-top-btn primary-btn">7</button>
          <button class="semi-top-btn primary-btn">8</button>
          <button class="semi-top-btn primary-btn">9</button>
          <button class="semi-top-btn secondary-btn">-</button>
        </div>

        <div class="mid-btns">
          <button class="mid-btn primary-btn">4</button>
          <button class="mid-btn primary-btn">5</button>
          <button class="mid-btn primary-btn">6</button>
          <button class="mid-btn secondary-btn">+</button>
        </div>

        <div class="semi-mid-btns">
          <button class="semi-mid-btn primary-btn">1</button>
          <button class="semi-mid-btn primary-btn">2</button>
          <button class="semi-mid-btn primary-btn">3</button>
          <button class="semi-mid-btn secondary-btn">+/-</button>
        </div>

        <div class="bot-btns">
          <button class="bot-btn primary-btn">0</button>
          <button class="bot-btn primary-btn">.</button>
          <button class="bot-btn primary-btn result-btn">=</button>
          <button class="bot-btn secondary-btn">%</button>
        </div>
      </div>
    </div>
  `;
}
