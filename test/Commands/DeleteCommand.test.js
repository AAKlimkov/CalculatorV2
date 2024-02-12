import DeleteCommand from "../../src/Calculator/Commands/DeleteCommand";

describe("DeleteCommand", () => {
  let calculator;
  let deleteCommand;

  beforeEach(() => {
    calculator = {
      currentOperand: "6789",
      previousOperand: "5*",
      operation: "+",
    };

    deleteCommand = new DeleteCommand(calculator);
  });

  describe("execute", () => {
    it("should delete the last character of currentOperand and update displayValue", () => {
      deleteCommand.execute();

      expect(calculator.currentOperand).toBe("678");
    });

    it('should handle deleting the last character when currentOperand is "0"', () => {
      calculator.currentOperand = "0";

      deleteCommand.execute();

      expect(calculator.currentOperand).toBe("0");
    });

    it('should handle deleting the last character when currentOperand is "-"', () => {
      calculator.currentOperand = "-";

      deleteCommand.execute();

      expect(calculator.currentOperand).toBe("0");
    });
  });

  describe("undo", () => {
    test("handles undo with no previous state", () => {
      deleteCommand.undo();

      expect(calculator.currentOperand).toBe("6789");
      expect(calculator.previousOperand).toBe("5*");
      expect(calculator.operation).toBe("+");
    });
    it("should undo the execute operation and restore previous state", () => {
      deleteCommand.execute();
      deleteCommand.undo();

      expect(calculator.currentOperand).toBe("6789");
      expect(calculator.previousOperand).toBe("5*");
      expect(calculator.operation).toBe("+");
    });
  });
});
