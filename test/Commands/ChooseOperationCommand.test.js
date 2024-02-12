import ChooseOperationCommand from "../../src/Calculator/Commands/ChooseOperationCommand";

describe("ChooseOperationCommand", () => {
  let calculator;
  let chooseOperationCommand;

  beforeEach(() => {
    calculator = {
      currentOperand: "456",
      previousOperand: "789+",
      operation: "+",
      compute: jest.fn(),
    };

    chooseOperationCommand = new ChooseOperationCommand(calculator, "*");
  });

  describe("execute", () => {
    it('should update operation and previousOperand when currentOperand is "0"', () => {
      calculator.currentOperand = "0";
      chooseOperationCommand.execute();

      expect(calculator.operation).toBe("*");
      expect(calculator.previousOperand).toBe("789*");
      expect(calculator.currentOperand).toBe("0");
    });

    it('should update operation, compute, and reset currentOperand when currentOperand is not "0"', () => {
      chooseOperationCommand.execute();

      expect(calculator.operation).toBe("*");
      expect(calculator.compute).toHaveBeenCalled();
      expect(calculator.previousOperand).toBe("456*");
      expect(calculator.currentOperand).toBe("0");
    });
  });

  describe("undo", () => {
    it("should undo the execute operation and restore previous state", () => {
      chooseOperationCommand.execute();
      chooseOperationCommand.undo();

      expect(calculator.currentOperand).toBe("456");
      expect(calculator.previousOperand).toBe("789+");
      expect(calculator.operation).toBe("+");
    });
  });
});
