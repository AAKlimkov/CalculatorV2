import EnterNumberCommand from "./Commands/EnterNumberCommand";
import DeleteCommand from "./Commands/DeleteCommand";
import DecimalCommand from "./Commands/DecimalCommand";
import ClearCommand from "./Commands/ClearCommand";
import ChooseOperationCommand from "./Commands/ChooseOperationCommand";
import ComputeCommand from "./Commands/ComputeCommand";
import ChangeSignCommand from "./Commands/ChangeSignCommand";

export default class Calculator {
  constructor() {
    this.displayValue = "0";
    this.currentOperand = "0";
    this.previousOperand = null;
    this.operation = null;
    this.commands = [];
  }

  executeCommand(command) {
    this.commands.push(command);
    command.execute();
  }

  undo() {
    if (this.commands.length > 0) {
      const lastCommand = this.commands.pop();
      lastCommand.undo();
    }
  }

  enterNumber(number) {
    this.executeCommand(new EnterNumberCommand(this, number));
  }

  delete() {
    this.executeCommand(new DeleteCommand(this));
  }

  decimal() {
    this.executeCommand(new DecimalCommand(this));
  }

  clear() {
    this.executeCommand(new ClearCommand(this));
  }

  chooseOperation(operation) {
    this.executeCommand(new ChooseOperationCommand(this, operation));
  }

  compute() {
    this.executeCommand(new ComputeCommand(this));
  }

  changeSign() {
    this.executeCommand(new ChangeSignCommand(this));
  }
}
