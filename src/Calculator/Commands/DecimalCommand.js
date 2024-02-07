import Command from "./Command";

export default class DecimalCommand extends Command {
  constructor(calculator) {
    super(calculator);
    this.previousState = null;
  }

  execute() {
    this.previousState = {
      displayValue: this.calculator.displayValue,
      currentOperand: this.calculator.currentOperand,
      previousOperand: this.calculator.previousOperand,
      operation: this.calculator.operation,
    };

    if (this.calculator.displayValue.includes(".")) return;

    if (
      this.calculator.displayValue === "0" ||
      this.calculator.currentOperand === null
    ) {
      this.calculator.displayValue = "0.";
      this.calculator.currentOperand = "0.";
    } else {
      this.calculator.displayValue += ".";
      this.calculator.currentOperand += ".";
    }
  }

  undo() {
    if (this.previousState) {
      this.calculator.displayValue = this.previousState.displayValue;
      this.calculator.currentOperand = this.previousState.currentOperand;
      this.calculator.previousOperand = this.previousState.previousOperand;
      this.calculator.operation = this.previousState.operation;
    }
  }
}
