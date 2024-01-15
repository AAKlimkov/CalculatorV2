import "./style.css";

import createCalculatorUI from "./UI/createUI";
import Calculator from "./Calculator/calculator";
import setupEventHandlers from "./UI/eventHandler";
import updateDisplay from "./UI/updateDisplay";

const calculator = new Calculator();
createCalculatorUI();

document.addEventListener("DOMContentLoaded", () => {
  setupEventHandlers(calculator, updateDisplay);
});
