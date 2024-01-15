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

  const clearButton = document.querySelector('[data-role="clear"]');
  clearButton.addEventListener("click", () => {
    calculator.clear();
    updateDisplay(calculator);
  });

  const equalsButton = document.querySelector('[data-role="equals"]');
  equalsButton.addEventListener("click", () => {
    calculator.compute();
    updateDisplay(calculator);
  });

  const deleteButton = document.querySelector('[data-role="delete"]');
  deleteButton.addEventListener("click", () => {
    calculator.delete();
    updateDisplay(calculator);
  });
}
