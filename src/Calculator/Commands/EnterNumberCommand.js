import Command from "./Command";

export default class EnterNumberCommand extends Command {
  constructor(calculator, number) {
    super(calculator);
    this.number = number;
    this.previousState = null;
  }

  execute() {
    this.previousState = {
      displayValue: this.calculator.displayValue,
      currentOperand: this.calculator.currentOperand,
      previousOperand: this.calculator.previousOperand,
      operation: this.calculator.operation,
    };

    if (this.calculator.operation === "equal") {
      this.calculator.operation = null;
      this.calculator.displayValue = this.number;
      this.calculator.currentOperand = this.number;
    } else if (
      this.calculator.displayValue === "0" ||
      this.calculator.currentOperand === "0" ||
      this.calculator.currentOperand === "Error"
    ) {
      this.calculator.displayValue = this.number;
      this.calculator.currentOperand = this.number;
    } else {
      this.calculator.displayValue += this.number;
      this.calculator.currentOperand += this.number;
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
