export default function setupEventHandlers(calculator, updateDisplay) {
  const numberButtons = document.querySelectorAll('[data-role="number"]');
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      calculator.enterNumber(button.textContent);
      updateDisplay(calculator);
    });
  });

  const operationButtons = document.querySelectorAll('[data-role="operation"]');
  operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      calculator.chooseOperation(button.textContent);
      updateDisplay(calculator);
    });
  });

  const clearButton = document.querySelector('[data-role="clear"]');
  clearButton.addEventListener("click", () => {
    calculator.clear();
    updateDisplay(calculator);
  });

  const equalsButton = document.querySelector('[data-role="equals"]');
  equalsButton.addEventListener("click", () => {
    calculator.compute();
    updateDisplay(calculator);
  });

  const deleteButton = document.querySelector('[data-role="delete"]');
  deleteButton.addEventListener("click", () => {
    calculator.delete();
    updateDisplay(calculator);
  });

  const decimalButton = document.querySelector('[data-role="decimal"]');
  decimalButton.addEventListener("click", () => {
    calculator.decimal();
    updateDisplay(calculator);
  });
  const signChangeButton = document.querySelector('[data-role="sign-change"]');
  signChangeButton.addEventListener("click", () => {
    calculator.changeSign();
    updateDisplay(calculator);
  });
  const memoryButtons = document.querySelectorAll('[data-role="memory"]');

  function updateMemoryButtonState() {
    const memoryDisabledButtons = [
      document.querySelectorAll('[data-role="memory"]')[0],
      document.querySelectorAll('[data-role="memory"]')[1],
    ];

    memoryDisabledButtons.forEach((el, index) => {
      if (calculator.memory === null) {
        memoryDisabledButtons[index].disabled = true;
        memoryDisabledButtons[index].classList.add("disabled");
      } else {
        memoryDisabledButtons[index].disabled = false;
        memoryDisabledButtons[index].classList.remove("disabled");
      }
    });
  }
  function handleMemoryButtonClick(text) {
    switch (text) {
      case "MC":
        calculator.memoryClear();
        updateMemoryButtonState();
        break;
      case "MR":
        calculator.memoryRecall();
        break;
      case "M+":
        calculator.memoryAdd();
        updateMemoryButtonState();
        break;
      case "M-":
        calculator.memorySubtract();
        updateMemoryButtonState();
        break;
      default:
        break;
    }
  }

  memoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      handleMemoryButtonClick(button.textContent);
      updateDisplay(calculator);
    });
  });

  const powerButtons = document.querySelectorAll('[data-role="power"]');

  function handlePowerButtonClick(power) {
    switch (power) {
      case "2":
        calculator.square();
        updateMemoryButtonState();
        break;
      case "3":
        calculator.cube();
        break;
      case "y":
        calculator.power();
        updateMemoryButtonState();
        break;
      case "10":
        calculator.tenPower();
        updateMemoryButtonState();
        break;
      default:
        break;
    }
  }

  powerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const powerValue = button.dataset.power;
      handlePowerButtonClick(powerValue);
      updateDisplay(calculator);
    });
  });

  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        calculator.enterNumber(event.key);
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        calculator.chooseOperation(event.key);
        break;
      case "Enter":
      case "=":
        calculator.compute();
        break;
      case "Escape":
        calculator.clear();
        break;
      case "Backspace":
        calculator.delete();
        break;
      case ".":
        calculator.decimal();
        break;
      default:
        break;
    }
    updateDisplay(calculator);
  });
}
