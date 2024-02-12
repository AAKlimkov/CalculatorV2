import ComputeCommand from "../../src/Calculator/Commands/ComputeCommand";

describe("ComputeCommand", () => {
  let calculator;
  let computeCommand;

  beforeEach(() => {
    calculator = {
      displayValue: "0",
      currentOperand: "5",
      previousOperand: "3",
      operation: "+",
      clear: jest.fn(),
    };

    computeCommand = new ComputeCommand(calculator);
  });

  describe("execute", () => {
    it("should compute the result and update calculator state", () => {
      computeCommand.execute();

      expect(calculator.displayValue).toBe("8");
      expect(calculator.currentOperand).toBe("8");
      expect(calculator.previousOperand).toBe("");
      expect(calculator.operation).toBe("equal");
    });

    it('should handle division by zero and set displayValue to "Error"', () => {
      calculator.currentOperand = "0";
      calculator.operation = "/";

      computeCommand.execute();

      expect(calculator.displayValue).toBe("Error");
      expect(calculator.currentOperand).toBe("0");
      expect(calculator.previousOperand).toBe("3");
      expect(calculator.operation).toBe("/");
    });
  });

  describe("undo", () => {
    it("should undo the execute operation and restore previous state", () => {
      computeCommand.execute();
      computeCommand.undo();

      expect(calculator.displayValue).toBe("0");
      expect(calculator.currentOperand).toBe("5");
      expect(calculator.previousOperand).toBe("3");
      expect(calculator.operation).toBe("+");
    });
  });
});
