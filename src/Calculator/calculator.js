import EnterNumberCommand from "./Commands/EnterNumberCommand";
import DeleteCommand from "./Commands/DeleteCommand";
import DecimalCommand from "./Commands/DecimalCommand";
import ClearCommand from "./Commands/ClearCommand";
import ChooseOperationCommand from "./Commands/ChooseOperationCommand";
import ComputeCommand from "./Commands/ComputeCommand";
import ChangeSignCommand from "./Commands/ChangeSignCommand";
import MemoryClearCommand from "./Commands/Memory/MemoryClearCommand";
import MemoryRecallCommand from "./Commands/Memory/MemoryRecallCommand";
import MemoryAddCommand from "./Commands/Memory/MemoryAddCommand";
import MemorySubtractCommand from "./Commands/Memory/MemorySubtractCommand";
import SquareCommand from "./Commands/Pow/SquareCommand";
import CubeCommand from "./Commands/Pow/CubeCommand";
import PowerCommand from "./Commands/Pow/PowerCommand";
import TenPowerCommand from "./Commands/Pow/TenPowerCommand";
import SquareRootCommand from "./Commands/Pow/SquareRootCommand";
import CubeRootCommand from "./Commands/Pow/CubeRootCommand";

export default class Calculator {
  constructor() {
    this.displayValue = "0";
    this.currentOperand = "0";
    this.previousOperand = null;
    this.memory = null;
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

  memoryClear() {
    this.executeCommand(new MemoryClearCommand(this));
  }

  memoryRecall() {
    this.executeCommand(new MemoryRecallCommand(this));
  }

  memoryAdd() {
    this.executeCommand(new MemoryAddCommand(this));
  }

  memorySubtract() {
    this.executeCommand(new MemorySubtractCommand(this));
  }

  square() {
    this.executeCommand(new SquareCommand(this));
  }

  cube() {
    this.executeCommand(new CubeCommand(this));
  }

  power(exponent) {
    this.executeCommand(new PowerCommand(this, exponent));
  }

  tenPower() {
    this.executeCommand(new TenPowerCommand(this));
  }

  squareRoot() {
    this.executeCommand(new SquareRootCommand(this));
  }

  cubeRoot() {
    this.executeCommand(new CubeRootCommand(this));
  }
}
