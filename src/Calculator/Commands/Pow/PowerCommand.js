import Command from "../Command";

export default class PowerCommand extends Command {
  constructor(calculator) {
    super(calculator);
    this.previousState = null;
    this.powerInProgress = false;
  }

  execute() {
    if (!this.powerInProgress) {
      this.powerInProgress = true;

      this.previousState = {
        currentOperand: this.calculator.currentOperand,
        displayValue: this.calculator.displayValue,
        operation: this.calculator.operation,
      };
      this.calculator.previousOperand = `${this.calculator.currentOperand}^`;
      this.calculator.currentOperand = "0";
      this.calculator.operation = "^";
      this.calculator.displayValue = "0";
    } else {
      this.calculator.currentOperand =
        this.calculator.previousOperand ** this.calculator.currentOperand;

      this.calculator.previousOperand = "";
      this.calculator.operation = null;
    }
  }

  undo() {
    if (this.previousState) {
      this.calculator.currentOperand = this.previousState.currentOperand;
      this.calculator.displayValue = this.previousState.displayValue;
      this.calculator.operation = this.previousState.operation;
      this.powerInProgress = false;
    }
  }
}
