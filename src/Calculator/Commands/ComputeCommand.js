import Command from "./Command";

export default class ComputeCommand extends Command {
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

    let computation;
    const prev = parseFloat(this.calculator.previousOperand);
    const current = parseFloat(this.calculator.currentOperand);

    switch (this.calculator.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "%":
        computation = (prev / 100) * current;
        break;
      case "^":
        computation = prev ** current;
        break;
      case "/":
        if (current === 0) {
          this.calculator.clear();
          this.calculator.displayValue = "Error";
          return;
        }
        computation = prev / current;
        break;
      default:
        this.calculator.operation = null;
        return;
    }

    this.calculator.currentOperand = computation.toString();
    this.calculator.displayValue = this.calculator.currentOperand;
    this.calculator.previousOperand = "";
    this.calculator.operation = "equal";
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
