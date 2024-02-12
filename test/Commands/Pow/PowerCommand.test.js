import Command from "../Command";

export default class PowerCommand extends Command {
  constructor(calculator) {
    super(calculator);
    this.previousState = null;
  }

  execute() {
    this.previousState = {
      currentOperand: this.calculator.currentOperand,
      displayValue: this.calculator.displayValue,
      operation: this.calculator.operation,
    };

    this.calculator.currentOperand += "^";
    this.calculator.displayValue = this.calculator.currentOperand;

  }

  undo() {
    if (this.previousState) {
      this.calculator.currentOperand = this.previousState.currentOperand;
      this.calculator.displayValue = this.previousState.displayValue;
      this.calculator.operation = this.previousState.operation;
    }
  }
}
