import createCalculatorUI from "../src/UI/createUI";

describe("createCalculatorUI function", () => {
  let calculatorGrid;

  beforeEach(() => {
    calculatorGrid = createCalculatorUI();
  });

  test("creates calculator grid", () => {
    expect(calculatorGrid).toBeInstanceOf(HTMLElement);
    expect(calculatorGrid.className).toBe("calculator-grid");
  });

  test("creates output section", () => {
    const outputSection = calculatorGrid.querySelector(".output");
    expect(outputSection).not.toBeNull();
    expect(outputSection.className).toBe("output");
  });

  test("creates previous operand display", () => {
    const previousOperand = calculatorGrid.querySelector(".previous-operand");
    expect(previousOperand).not.toBeNull();
    expect(previousOperand.dataset.previousOperand).toBeDefined();
  });

  test("creates current operand display", () => {
    const currentOperand = calculatorGrid.querySelector(".current-operand");
    expect(currentOperand).not.toBeNull();
    expect(currentOperand.dataset.currentOperand).toBeDefined();
  });

  test("correct number of buttons", () => {
    const buttons = calculatorGrid.querySelectorAll("button");
    expect(buttons.length).toBe(33);
  });

  test("button text content", () => {
    const buttonAC = calculatorGrid.querySelector(".btn-clear");
    const buttonOne = calculatorGrid.querySelector(".btn-number");
    expect(buttonAC.textContent).toBe("AC");
    expect(buttonOne.textContent).toBe("9");
  });

  test("button classes", () => {
    const operationButton = calculatorGrid.querySelector(".btn-operation");
    expect(operationButton).not.toBeNull();
  });

  test("data attributes on buttons", () => {
    const numberButton = calculatorGrid.querySelector(".btn-number");
    expect(numberButton.dataset.role).toBe("number");
  });
  test("correctly creates buttons with specified properties", () => {
    const expectedButtons = [
      { text: "AC", class: "btn-clear", dataRole: "clear" },
      { text: "%", class: "btn-operation", dataRole: "operation" },
    ];

    expectedButtons.forEach(({ text, class: className, dataRole }) => {
      const button = calculatorGrid.querySelector(`.${className}`);
      expect(button).not.toBeNull();
      expect(button.textContent).toBe(text);
      expect(button.dataset.role).toBe(dataRole);
    });
  });
});
