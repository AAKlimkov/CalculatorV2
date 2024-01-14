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

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
    if (this.currentOperand === "" || this.currentOperand === "-")
      this.currentOperand = "0";
    this.displayValue = this.currentOperand;
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

  changeSign() {
    if (this.currentOperand.startsWith("-")) {
      this.currentOperand = this.currentOperand.substring(1);
    } else if (this.currentOperand !== "0") {
      this.currentOperand = `-${this.currentOperand}`;
    } else {
      this.currentOperand = "0";
    }
    this.displayValue = this.currentOperand;
  }
}
