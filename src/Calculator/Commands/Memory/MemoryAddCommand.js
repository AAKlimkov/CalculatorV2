import Command from "../Command";

export default class MemoryAddCommand extends Command {
  execute() {
    const currentValue = parseFloat(this.calculator.currentOperand);
    this.calculator.memory += currentValue;
  }
}
