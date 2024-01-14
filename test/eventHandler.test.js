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
  test("clicking number buttons updates the display", () => {
    const firstNumberButton = document.querySelector("[data-role='number']");
    firstNumberButton.click();
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

  test("clicking number buttons updates the display", () => {
    const firstNumberButton = document.querySelector("[data-role='number']");
    firstNumberButton.click();
    expect(getDisplayValue()).toBe("9");
  });
});
