export default class Calculator {
  constructor() {
    this.displayValue = "0";
    this.currentOperand = null;
    this.previousOperand = null;
    this.operation = null;
  }

  enterNumber(number) {
    if (this.displayValue === "0" || this.currentOperand === null) {
      this.displayValue = number;
      this.currentOperand = number;
    } else {
      this.displayValue += number;
      this.currentOperand += number;
    }
  }

  clear() {
    this.displayValue = "0";
    this.currentOperand = null;
    this.previousOperand = null;
    this.operation = null;
  }
}
