import DecimalCommand from "../../src/Calculator/Commands/DecimalCommand";

describe("DecimalCommand", () => {
  let calculator;
  let decimalCommand;

  beforeEach(() => {
    calculator = {
      displayValue: "3.14",
      currentOperand: "2.71",
      previousOperand: "5*",
      operation: "+",
    };

    decimalCommand = new DecimalCommand(calculator);
  });

  describe("execute", () => {
    it("should add a decimal point to displayValue and currentOperand if not present", () => {
      decimalCommand.execute();

      expect(calculator.displayValue).toBe("3.14");
      expect(calculator.currentOperand).toBe("2.71");
    });

    it("should not add a second decimal point to displayValue and currentOperand", () => {
      calculator.displayValue = "3.14";
      calculator.currentOperand = "2.71";

      decimalCommand.execute();

      expect(calculator.displayValue).toBe("3.14");
      expect(calculator.currentOperand).toBe("2.71");
    });

    it('should handle adding a decimal point when displayValue is "0" or currentOperand is null', () => {
      calculator.displayValue = "0";
      calculator.currentOperand = null;

      decimalCommand.execute();

      expect(calculator.displayValue).toBe("0.");
      expect(calculator.currentOperand).toBe("0.");
    });
  });

  describe("undo", () => {
    test("handles undo with no previous state", () => {
      decimalCommand.undo();

      expect(calculator.currentOperand).toBe("2.71");
      expect(calculator.previousOperand).toBe("5*");
      expect(calculator.operation).toBe("+");
    });
    it("should undo the execute operation and restore previous state", () => {
      decimalCommand.execute();
      decimalCommand.undo();

      expect(calculator.displayValue).toBe("3.14");
      expect(calculator.currentOperand).toBe("2.71");
      expect(calculator.previousOperand).toBe("5*");
      expect(calculator.operation).toBe("+");
    });
  });
});
