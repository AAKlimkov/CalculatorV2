import Command from "./Command";

export function calculateFactorial(num) {
  if (num <= 1) {
    return 1;
  }
  if (!Number.isFinite(num)) {
    return Infinity;
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
      try {
        this.calculator.currentOperand =
          calculateFactorial(currentValue).toString();
        if (this.calculator.currentOperand === "Infinity") {
          this.calculator.clear();
          this.calculator.displayValue = "Error";
          this.calculator.currentOperand = "Error";
        }
      } catch (error) {
        this.calculator.clear();
        this.calculator.displayValue = "Error";
        this.calculator.currentOperand = "Error";
      }
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
