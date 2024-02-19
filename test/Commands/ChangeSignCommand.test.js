import ChangeSignCommand from "../../src/Calculator/Commands/ChangeSignCommand";

describe("ChangeSignCommand", () => {
  let calculator;
  let changeSignCommand;

  beforeEach(() => {
    calculator = {
      displayValue: "0",
      currentOperand: "5",
      previousOperand: null,
      operation: null,
    };

    changeSignCommand = new ChangeSignCommand(calculator);
  });

  describe("execute", () => {
    it("should change the sign of the current operand", () => {
      changeSignCommand.execute();
      expect(calculator.displayValue).toBe("-5");
      expect(calculator.currentOperand).toBe("-5");
    });

    it('should change the sign of "0" to "0"', () => {
      calculator.currentOperand = "0";
      changeSignCommand.execute();
      expect(calculator.displayValue).toBe("0");
      expect(calculator.currentOperand).toBe("0");
    });

    it("should change the sign of a negative operand to positive", () => {
      calculator.currentOperand = "-3.14";
      changeSignCommand.execute();
      expect(calculator.displayValue).toBe("3.14");
      expect(calculator.currentOperand).toBe("3.14");
    });
  });

  describe("undo", () => {
    it("should undo the execute operation and restore previous state", () => {
      changeSignCommand.execute();
      changeSignCommand.undo();

      expect(calculator.displayValue).toBe("0");
      expect(calculator.currentOperand).toBe("5");
      expect(calculator.previousOperand).toBe(null);
      expect(calculator.operation).toBe(null);
    });
  });
});

describe("ChangeSignCommand", () => {
  let calculator;
  let changeSignCommand;

  beforeEach(() => {
    calculator = {
      displayValue: "0",
      currentOperand: "5",
      previousOperand: null,
      operation: null,
    };

    changeSignCommand = new ChangeSignCommand(calculator);
  });

  describe("undo", () => {
    it("should do nothing if previousState is null", () => {
      expect(calculator.previousOperand).toBe(null);

      expect(() => changeSignCommand.undo()).not.toThrow();

      expect(calculator.displayValue).toBe("0");
      expect(calculator.currentOperand).toBe("5");
      expect(calculator.previousOperand).toBe(null);
      expect(calculator.operation).toBe(null);
    });

    it("should undo the execute operation and restore previous state", () => {
      changeSignCommand.execute();
      changeSignCommand.undo();

      expect(calculator.displayValue).toBe("0");
      expect(calculator.currentOperand).toBe("5");
      expect(calculator.previousOperand).toBe(null);
      expect(calculator.operation).toBe(null);
    });
  });
});
