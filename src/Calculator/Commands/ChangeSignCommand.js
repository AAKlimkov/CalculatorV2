import Command from "./Command";

export default class ChangeSignCommand extends Command {
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

    if (this.calculator.currentOperand.startsWith("-")) {
      this.calculator.currentOperand =
        this.calculator.currentOperand.substring(1);
    } else if (this.calculator.currentOperand !== "0") {
      this.calculator.currentOperand = `-${this.calculator.currentOperand}`;
    } else {
      this.calculator.currentOperand = "0";
    }

    this.calculator.displayValue = this.calculator.currentOperand;
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
