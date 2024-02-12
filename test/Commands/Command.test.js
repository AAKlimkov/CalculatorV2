import Command from "../../src/Calculator/Commands/Command";

describe("Command", () => {
  let calculator;
  let command;

  beforeEach(() => {
    calculator = {
      displayValue: "0",
      currentOperand: "0",
      previousOperand: null,
      operation: null,
    };

    command = new Command(calculator);
  });

  describe("execute", () => {
    it("should be a function", () => {
      expect(typeof command.execute).toBe("function");
    });

    it("should not throw an error", () => {
      expect(() => command.execute()).not.toThrow();
    });
  });

  describe("undo", () => {
    it("should be a function", () => {
      expect(typeof command.undo).toBe("function");
    });

    it("should not throw an error", () => {
      expect(() => command.undo()).not.toThrow();
    });
  });
});
