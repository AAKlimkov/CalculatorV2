import Command from "../Command";

export default class MemoryRecallCommand extends Command {
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

    this.calculator.currentOperand = this.calculator.memory.toString();
    this.calculator.displayValue = this.calculator.currentOperand;
  }

  undo() {
    this.calculator.displayValue = this.previousState.displayValue;
    this.calculator.currentOperand = this.previousState.currentOperand;
    this.calculator.previousOperand = this.previousState.previousOperand;
    this.calculator.operation = this.previousState.operation;
  }
}
