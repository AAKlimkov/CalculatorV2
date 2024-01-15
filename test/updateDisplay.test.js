import updateDisplay from "../src/UI/updateDisplay";

describe("updateDisplay function", () => {
  let mockCalculator;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="previous-operand"></div>
      <div class="current-operand"></div
`;
    mockCalculator = {
      previousOperand: "",
      currentOperand: "",
    };
  });

  test("updates current operand display", () => {
    mockCalculator.currentOperand = "123";
    updateDisplay(mockCalculator);
    const currentOperandTextElement =
      document.querySelector(".current-operand");
    expect(currentOperandTextElement.textContent).toBe("123");
  });

  test("updates previous operand display", () => {
    mockCalculator.previousOperand = "456";
    updateDisplay(mockCalculator);
    const previousOperandTextElement =
      document.querySelector(".previous-operand");
    expect(previousOperandTextElement.textContent).toBe("456");
  });

  test("handles empty operands", () => {
    updateDisplay(mockCalculator);
    const currentOperandTextElement =
      document.querySelector(".current-operand");
    const previousOperandTextElement =
      document.querySelector(".previous-operand");
    expect(currentOperandTextElement.textContent).toBe("");
    expect(previousOperandTextElement.textContent).toBe("");
  });
});
