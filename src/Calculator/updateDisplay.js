export default function updateDisplay(calculator) {
  const previousOperandTextElement =
    document.querySelector(".previous-operand");
  const currentOperandTextElement = document.querySelector(".current-operand");

  previousOperandTextElement.textContent = calculator.previousOperand;
  currentOperandTextElement.textContent = calculator.currentOperand;
}
