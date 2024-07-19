function renderCalculator() {
  const calculatorHTML = document.querySelector(".js-calculator");
  calculatorHTML.innerHTML += `
    <div class="calculator-body">
      <div class="calculation-display">
      </div>

      <div class="calculator-btns">
        <div class="top-btns">
          <button class="top-btn">Clear</button>
          <button class="top-btn">√</button>
          <button class="top-btn">/</button>
          <button class="top-btn">X</button>
        </div>
        
        <div class="semi-top-btns">
          <button class="semi-top-btn">7</button>
          <button class="semi-top-btn">8</button>
          <button class="semi-top-btn">9</button>
          <button class="semi-top-btn">-</button>
        </div>

        <div class="mid-btns">
          <button class="mid-btn">4</button>
          <button class="mid-btn">5</button>
          <button class="mid-btn">6</button>
          <button class="mid-btn">+</button>
        </div>

        <div class="semi-mid-btns">
          <button class="semi-mid-btn">1</button>
          <button class="semi-mid-btn">2</button>
          <button class="semi-mid-btn">3</button>
          <button class="semi-mid-btn">+/-</button>
        </div>

        <div class="bot-btns">
          <button class="bot-btn">0</button>
          <button class="bot-btn">.</button>
          <button class="bot-btn">=</button>
          <button class="bot-btn">%</button>
        </div>
      </div>
    </div>
  `;
}

export default renderCalculator;
