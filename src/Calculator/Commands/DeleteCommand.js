import Command from "./Command";

export default class DeleteCommand extends Command {
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

    if (this.calculator.currentOperand === "0") return;

    this.calculator.currentOperand = this.calculator.currentOperand
      .toString()
      .slice(0, -1);

    if (
      this.calculator.currentOperand === "" ||
      this.calculator.currentOperand === "-"
    ) {
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
