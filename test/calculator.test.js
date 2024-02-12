import Calculator from "../src/Calculator/calculator";

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("undo should revert the last command", () => {
    const initialState = {
      displayValue: "5",
      currentOperand: "5",
      previousOperand: null,
      operation: null,
    };
    calculator.state = { ...initialState };

    calculator.enterNumber("3");
    calculator.delete();
    calculator.undo();

    expect(calculator.state).toEqual(initialState);
  });

  test("undo should do nothing when there are no commands", () => {
    const initialState = {
      displayValue: "5",
      currentOperand: "5",
      previousOperand: null,
      operation: null,
    };
    calculator.state = { ...initialState };

    calculator.undo();

    expect(calculator.state).toEqual(initialState);
  });
});
