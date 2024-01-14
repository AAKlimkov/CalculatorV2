import "./style.css";

import createCalculatorUI from "./Calculator/createUI";
import Calculator from "./Calculator/calculator";
import setupEventHandlers from "./Calculator/eventHandler";
import updateDisplay from "./Calculator/updateDisplay";

const calculator = new Calculator();
createCalculatorUI();

document.addEventListener("DOMContentLoaded", () => {
  setupEventHandlers(calculator, updateDisplay);
});
