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

      // Assert that the decimal point is added as expected
      expect(calculator.displayValue).toBe("3.14");
      expect(calculator.currentOperand).toBe("2.71");
    });

    it("should not add a second decimal point to displayValue and currentOperand", () => {
      calculator.displayValue = "3.14";
      calculator.currentOperand = "2.71";

      decimalCommand.execute();

      // Assert that a second decimal point is not added
      expect(calculator.displayValue).toBe("3.14");
      expect(calculator.currentOperand).toBe("2.71");
    });

    it('should handle adding a decimal point when displayValue is "0" or currentOperand is null', () => {
      calculator.displayValue = "0";
      calculator.currentOperand = null;

      decimalCommand.execute();

      // Assert that the decimal point is added as expected
      expect(calculator.displayValue).toBe("0.");
      expect(calculator.currentOperand).toBe("0.");
    });

    // Add more specific test cases for the execute method as needed
  });

  describe("undo", () => {
    it("should undo the execute operation and restore previous state", () => {
      decimalCommand.execute();
      decimalCommand.undo();

      // Assert that the state is restored to its original values
      expect(calculator.displayValue).toBe("3.14");
      expect(calculator.currentOperand).toBe("2.71");
      expect(calculator.previousOperand).toBe("5*");
      expect(calculator.operation).toBe("+");
    });

    // Add more specific test cases for the undo method as needed
  });
});
