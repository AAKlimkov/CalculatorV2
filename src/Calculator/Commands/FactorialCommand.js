import Command from "./Command";

function calculateFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * calculateFactorial(num - 1);
}

export default class FactorialCommand extends Command {
  constructor(calculator) {
    super(calculator);
    this.previousState = null;
  }

  execute() {
    this.previousState = {
      currentOperand: this.calculator.currentOperand,
      displayValue: this.calculator.displayValue,
    };

    const currentValue = parseFloat(this.calculator.currentOperand);

    if (Number.isInteger(currentValue) && currentValue >= 0) {
      this.calculator.currentOperand =
        calculateFactorial(currentValue).toString();
    } else {
      this.calculator.clear();
      this.calculator.displayValue = "Error";
      this.calculator.currentOperand = "Error";
    }

    this.calculator.displayValue = this.calculator.currentOperand;
  }

  undo() {
    if (this.previousState) {
      this.calculator.currentOperand = this.previousState.currentOperand;
      this.calculator.displayValue = this.previousState.displayValue;
    }
  }
}
