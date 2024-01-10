import "./style.css";

class Calculator {
  constructor(previousOperandTextElement = "", currentOperandTextElement = "") {
    this.state = 0;
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.currentOperand = "";
    this.previusOperand = "";
    this.operation = undefined;
  }
}

const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]",
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]",
);
Calculator(previousOperandTextElement, currentOperandTextElement);
