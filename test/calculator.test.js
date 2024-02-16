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

describe("Calculator Memory Operations", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
    calculator.currentOperand = "5";
    calculator.memory = 10;
  });

  test("memoryClear clears the memory", () => {
    calculator.memoryClear();
    expect(calculator.memory).toBeNull();
  });

  test("memoryRecall recalls memory and updates current operand and display", () => {
    calculator.memoryRecall();
    expect(calculator.currentOperand).toBe("10");
    expect(calculator.displayValue).toBe("10");
  });

  test("memoryAdd adds current operand to memory", () => {
    calculator.currentOperand = "7";
    calculator.memoryAdd();
    expect(calculator.memory).toBe(17);
  });

  test("memorySubtract subtracts current operand from memory", () => {
    calculator.currentOperand = "3";
    calculator.memorySubtract();
    expect(calculator.memory).toBe(7);
  });
  test("square() calculates square correctly", () => {
    calculator.enterNumber("4");
    calculator.square();

    expect(calculator.displayValue).toBe("16");
  });

  test("cube() calculates cube correctly", () => {
    calculator.enterNumber("3");
    calculator.cube();

    expect(calculator.displayValue).toBe("27");
  });

  test("tenPower() calculates 10^x correctly", () => {
    calculator.enterNumber("2");
    calculator.tenPower();

    expect(calculator.displayValue).toBe("100");
  });

  test("squareRoot() calculates square root correctly for positive value", () => {
    calculator.enterNumber("25");
    calculator.squareRoot();

    expect(calculator.displayValue).toBe("5");
  });

  test("squareRoot() handles square root computation for negative value", () => {
    calculator.enterNumber("-9");
    calculator.squareRoot();

    expect(calculator.displayValue).toBe("Error");
  });

  test("cubeRoot() calculates cube root correctly", () => {
    calculator.enterNumber("64");
    calculator.cubeRoot();

    expect(calculator.displayValue).toBe("4");
  });

  test("factorial() calculates factorial correctly", () => {
    calculator.enterNumber("5");
    calculator.factorial();

    expect(calculator.displayValue).toBe("120");
  });

  test("reciprocal() calculates reciprocal correctly", () => {
    calculator.enterNumber("2");
    calculator.reciprocal();

    expect(calculator.displayValue).toBe("0.5");
  });
});
