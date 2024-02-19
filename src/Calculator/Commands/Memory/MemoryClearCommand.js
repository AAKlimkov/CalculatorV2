import Command from "../Command";

export default class MemoryClearCommand extends Command {
  execute() {
    this.calculator.memory = null;
  }
}
