import createCalculatorUI from "../src/Calculator/createUI";
import setupEventHandlers from "../src/Calculator/eventHandler";
import Calculator from "../src/Calculator/calculator";
import updateDisplay from "../src/Calculator/updateDisplay";

describe("Calculator call update function", () => {
  let calculator;
  const updateDisplayMock = jest.fn();
  beforeEach(() => {
    calculator = new Calculator();
    createCalculatorUI();

    setupEventHandlers(calculator, updateDisplayMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
    document.body.innerHTML = "";
  });
  test("clicking number buttons call update function", () => {
    const firstNumberButton = document.querySelector("[data-role='number']");
    firstNumberButton.click();
    expect(updateDisplayMock).toHaveBeenCalled();
  });
  test("clicking operation call update function", () => {
    const firstNumberButton = document.querySelector("[data-role='operation']");
    firstNumberButton.click();
    expect(updateDisplayMock).toHaveBeenCalled();
  });
  test("clicking delete call update function", () => {
    const deleteButton = document.querySelector("[data-role='delete']");
    deleteButton.click();
    expect(updateDisplayMock).toHaveBeenCalled();
  });
  test("clicking clear call update function", () => {
    const deleteButton = document.querySelector("[data-role='clear']");
    deleteButton.click();
    expect(updateDisplayMock).toHaveBeenCalled();
  });
  test("clicking equals call update function", () => {
    const deleteButton = document.querySelector("[data-role='equals']");
    deleteButton.click();
    expect(updateDisplayMock).toHaveBeenCalled();
  });
});

describe("Calculator UI call update display", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
    createCalculatorUI();

    setupEventHandlers(calculator, updateDisplay);
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });
  function getDisplayValue() {
    return document.querySelector(".current-operand").textContent;
  }
  function getPreviousValue() {
    return document.querySelector(".previous-operand").textContent;
  }

  test("clicking number buttons updates the display", () => {
    const firstNumberButton = document.querySelector("[data-role='number']");
    firstNumberButton.click();
    expect(getDisplayValue()).toBe("9");
  });
  test("clicking operation buttons updates the display", () => {
    const firstNumberButton = document.querySelector("[data-role='number']");
    const operationButtons = document.querySelectorAll(
      "[data-role='operation']",
    );
    firstNumberButton.click();
    operationButtons[0].click();
    expect(getPreviousValue()).toBe("9^");
    expect(getDisplayValue()).toBe("");
    operationButtons[1].click();
    expect(getPreviousValue()).toBe("9÷");
    expect(getDisplayValue()).toBe("");
  });
  test("clicking delete buttons updates the display", () => {
    const firstNumberButton = document.querySelector("[data-role='number']");
    const deleteButton = document.querySelector("[data-role='delete']");
    firstNumberButton.click();
    firstNumberButton.click();
    deleteButton.click();
    expect(getDisplayValue()).toBe("9");
    deleteButton.click();
    expect(getDisplayValue()).toBe("0");
  });
  test("clicking clear buttons updates the display", () => {
    const clearButton = document.querySelector("[data-role='clear']");
    const firstNumberButton = document.querySelector("[data-role='number']");
    const operationButtons = document.querySelectorAll(
      "[data-role='operation']",
    );
    firstNumberButton.click();
    operationButtons[0].click();
    firstNumberButton.click();
    clearButton.click();
    expect(getDisplayValue()).toBe("");
    expect(getPreviousValue()).toBe("");
  });
  test("clicking equals buttons updates the display", () => {
    const equalsButton = document.querySelector("[data-role='equals']");
    const firstNumberButton = document.querySelector("[data-role='number']");
    const operationButtons = document.querySelectorAll(
      "[data-role='operation']",
    );
    firstNumberButton.click();
    operationButtons[1].click();
    firstNumberButton.click();
    equalsButton.click();
    expect(getDisplayValue()).toBe("1");
    expect(getPreviousValue()).toBe("");
  });
});
