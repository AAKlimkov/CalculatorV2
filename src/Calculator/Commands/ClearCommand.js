import Command from "./Command";

export default class ClearCommand extends Command {
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

    this.calculator.displayValue = "0";
    this.calculator.currentOperand = "0";
    this.calculator.previousOperand = null;
    this.calculator.operation = null;
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
