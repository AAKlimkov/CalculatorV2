import Command from "./Command";

export default class ReciprocalCommand extends Command {
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

    if (currentValue !== 0) {
      this.calculator.currentOperand = (1 / currentValue).toString();
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
