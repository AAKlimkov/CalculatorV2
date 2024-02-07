import Command from "./Command";

export default class ChooseOperationCommand extends Command {
  constructor(calculator, operation) {
    super(calculator);
    this.operation = operation;
    this.previousState = null;
  }

  execute() {
    this.previousState = {
      displayValue: this.calculator.displayValue,
      currentOperand: this.calculator.currentOperand,
      previousOperand: this.calculator.previousOperand,
      operation: this.calculator.operation,
    };

    if (this.calculator.currentOperand === "0") {
      if (this.calculator.previousOperand) {
        this.calculator.operation = this.operation;
        this.calculator.previousOperand =
          this.calculator.previousOperand.toString().slice(0, -1) +
          this.calculator.operation;
      }
    } else {
      if (this.calculator.previousOperand !== null) {
        this.calculator.compute();
      }
      this.calculator.operation = this.operation;
      this.calculator.previousOperand =
        this.calculator.currentOperand + this.operation;
      this.calculator.currentOperand = "0";
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
