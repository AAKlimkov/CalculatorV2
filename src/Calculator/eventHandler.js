export default function setupEventHandlers(calculator, updateDisplay) {
  const numberButtons = document.querySelectorAll('[data-role="number"]');
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      calculator.enterNumber(button.textContent);
      updateDisplay(calculator);
    });
  });

  const operationButtons = document.querySelectorAll('[data-role="operation"]');
  operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      calculator.chooseOperation(button.textContent);
      updateDisplay(calculator);
    });
  });
}
