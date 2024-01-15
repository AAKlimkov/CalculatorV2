export default class Calculator {
  constructor() {
    this.displayValue = "0";
    this.currentOperand = "0";
    this.previousOperand = null;
    this.operation = null;
  }

  enterNumber(number) {
    if (this.operation === "equal") {
      this.operation = null;
      this.displayValue = number;
      this.currentOperand = number;
      return;
    }
    if (this.displayValue === "0" || this.currentOperand === "0") {
      this.displayValue = number;
      this.currentOperand = number;
    } else {
      this.displayValue += number;
      this.currentOperand += number;
    }
  }

  delete() {
    if (this.currentOperand === "0") return;
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
    if (this.currentOperand === "" || this.currentOperand === "-")
      this.currentOperand = "0";
    this.displayValue = this.currentOperand;
  }

  decimal() {
    if (this.displayValue.includes(".")) return;
    if (this.displayValue === "0" || this.currentOperand === null) {
      this.displayValue = "0.";
      this.currentOperand = "0.";
    } else {
      this.displayValue += ".";
      this.currentOperand += ".";
    }
  }

  clear() {
    this.displayValue = "0";
    this.currentOperand = "0";
    this.previousOperand = null;
    this.operation = null;
  }

  chooseOperation(operation) {
    if (this.currentOperand === "0") {
      if (this.previousOperand) {
        this.operation = operation;
        this.previousOperand =
          this.previousOperand.toString().slice(0, -1) + this.operation;
      }
    } else {
      if (this.previousOperand !== null) {
        this.compute();
      }
      this.operation = operation;
      this.previousOperand = this.currentOperand + this.operation;
      this.currentOperand = "0";
    }
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
      case "%":
        computation = (prev / 100) * current;
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
    this.previousOperand = "";
    this.operation = "equal";
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
