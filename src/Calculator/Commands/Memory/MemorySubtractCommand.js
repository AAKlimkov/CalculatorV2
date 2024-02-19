import Command from "../Command";

export default class MemorySubtractCommand extends Command {
  execute() {
    const currentValue = parseFloat(this.calculator.currentOperand);
    this.calculator.memory -= currentValue;
  }
}
