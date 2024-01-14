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

  chooseOperation(operation) {
    if (this.currentOperand === null) return;
    if (this.previousOperand !== null) {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = null;
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        if (current === 0) {
          this.clear();
          this.displayValue = "Error";
          return;
        }
        computation = prev / current;

        break;
      default:
        return;
    }
    this.currentOperand = computation.toString();
    this.displayValue = this.currentOperand;
    this.operation = null;
    this.previousOperand = "";
  }
}
