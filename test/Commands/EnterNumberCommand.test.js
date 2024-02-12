import EnterNumberCommand from "../../src/Calculator/Commands/EnterNumberCommand";

describe("EnterNumberCommand", () => {
  let calculator;
  let enterNumberCommand;

  beforeEach(() => {
    calculator = {
      displayValue: "123",
      currentOperand: "456",
      previousOperand: "5*",
      operation: "+",
    };

    enterNumberCommand = new EnterNumberCommand(calculator, "789");
  });

  describe("execute", () => {
    it('should update displayValue and currentOperand when operation is "equal"', () => {
      calculator.operation = "equal";
      enterNumberCommand.execute();

      // Assert that the state is updated as expected
      expect(calculator.displayValue).toBe("789");
      expect(calculator.currentOperand).toBe("789");
      expect(calculator.operation).toBe(null);
    });

    it('should update displayValue and currentOperand when both are "0"', () => {
      calculator.displayValue = "0";
      calculator.currentOperand = "0";
      enterNumberCommand.execute();

      // Assert that the state is updated as expected
      expect(calculator.displayValue).toBe("789");
      expect(calculator.currentOperand).toBe("789");
    });

    it("should append number to displayValue and currentOperand", () => {
      enterNumberCommand.execute();

      // Assert that the number is appended as expected
      expect(calculator.displayValue).toBe("123789");
      expect(calculator.currentOperand).toBe("456789");
    });

    // Add more specific test cases for the execute method as needed
  });

  describe("undo", () => {
    it("should undo the execute operation and restore previous state", () => {
      enterNumberCommand.execute();
      enterNumberCommand.undo();

      // Assert that the state is restored to its original values
      expect(calculator.displayValue).toBe("123");
      expect(calculator.currentOperand).toBe("456");
      expect(calculator.previousOperand).toBe("5*");
      expect(calculator.operation).toBe("+");
    });

    // Add more specific test cases for the undo method as needed
  });
});
