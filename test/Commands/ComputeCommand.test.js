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
      expect(calculator.currentOperand).toBe("Error");
      expect(calculator.previousOperand).toBe("3");
      expect(calculator.operation).toBe("/");
    });
    test("adds two numbers", () => {
      calculator.previousOperand = "2";
      calculator.operation = "+";
      calculator.currentOperand = "3";

      computeCommand.execute();

      expect(calculator.displayValue).toBe("5");
    });

    test("subtracts two numbers", () => {
      calculator.previousOperand = "7";
      calculator.operation = "-";
      calculator.currentOperand = "4";

      computeCommand.execute();

      expect(calculator.displayValue).toBe("3");
    });

    test("multiplies two numbers", () => {
      calculator.currentOperand = "6";
      calculator.operation = "*";
      calculator.previousOperand = "5";

      computeCommand.execute();

      expect(calculator.displayValue).toBe("30");
    });

    test("calculates percentage", () => {
      calculator.previousOperand = "50";
      calculator.operation = "%";
      calculator.currentOperand = "5";

      computeCommand.execute();

      expect(calculator.displayValue).toBe("2.5");
    });

    test("divides two numbers", () => {
      calculator.previousOperand = "8";
      calculator.operation = "/";
      calculator.currentOperand = "2";

      computeCommand.execute();

      expect(calculator.displayValue).toBe("4");
    });

    test("handles division by zero", () => {
      calculator.previousOperand = "5";
      calculator.operation = "/";
      calculator.currentOperand = "0";

      computeCommand.execute();

      expect(calculator.displayValue).toBe("Error");
    });

    test("handles unknown operation", () => {
      calculator.currentOperand = "5";
      calculator.previousOperand = "3";

      calculator.operation = "#";

      computeCommand.execute();

      expect(calculator.displayValue).toBe("0");
      expect(calculator.currentOperand).toBe("5");
      expect(calculator.previousOperand).toBe("3");
      expect(calculator.operation).toBe(null);
    });
  });

  describe("undo", () => {
    test("handles undo with no previous state", () => {
      computeCommand.undo();

      expect(calculator.displayValue).toBe("0");
      expect(calculator.currentOperand).toBe("5");
      expect(calculator.previousOperand).toBe("3");
      expect(calculator.operation).toBe("+");
    });
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
