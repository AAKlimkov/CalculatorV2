import ClearCommand from "../../src/Calculator/Commands/ClearCommand";

describe("ClearCommand", () => {
  let calculator;
  let clearCommand;

  beforeEach(() => {
    calculator = {
      displayValue: "42",
      currentOperand: "3.14",
      previousOperand: "5*",
      operation: "+",
    };

    clearCommand = new ClearCommand(calculator);
  });

  describe("execute", () => {
    it('should clear the calculator state and set displayValue, currentOperand, previousOperand, and operation to "0"', () => {
      clearCommand.execute();

      expect(calculator.displayValue).toBe("0");
      expect(calculator.currentOperand).toBe("0");
      expect(calculator.previousOperand).toBe(null);
      expect(calculator.operation).toBe(null);
    });

    it("should store the previous state before clearing", () => {
      clearCommand.execute();

      expect(clearCommand.previousState).toEqual({
        displayValue: "42",
        currentOperand: "3.14",
        previousOperand: "5*",
        operation: "+",
      });
    });
  });

  describe("undo", () => {
    it("should undo the execute operation and restore previous state", () => {
      clearCommand.execute();
      clearCommand.undo();

      expect(calculator.displayValue).toBe("42");
      expect(calculator.currentOperand).toBe("3.14");
      expect(calculator.previousOperand).toBe("5*");
      expect(calculator.operation).toBe("+");
    });
  });
});
