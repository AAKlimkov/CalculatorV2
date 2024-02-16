import Command from "../Command";

export default class SquareCommand extends Command {
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
    this.calculator.currentOperand = (currentValue ** (1 / 3)).toString();
    this.calculator.displayValue = this.calculator.currentOperand;
  }

  undo() {
    if (this.previousState) {
      this.calculator.currentOperand = this.previousState.currentOperand;
      this.calculator.displayValue = this.previousState.displayValue;
    }
  }
}
