import create from "../Utils/create";

export default function createCalculator() {
  const calculatorGrid = create("div", "calculator-grid", null, document.body);

  const output = create("div", "output", null, calculatorGrid);
  create("div", "previous-operand", null, output, [
    "data-previous-operand",
    "",
  ]);
  create("div", "current-operand", null, output, ["data-current-operand", ""]);

  const buttons = [
    { text: "AC", data: ["role", "clear"], class: "btn-clear" },
    { text: "^", data: ["role", "operation"], class: "btn-operation" },
    { text: "DEL", data: ["role", "delete"], class: "btn-delete" },
    { text: "÷", data: ["role", "operation"], class: "btn-operation span-two" },
    { text: "1", data: ["role", "number"], class: "btn-number" },
    { text: "2", data: ["role", "number"], class: "btn-number" },
    { text: "3", data: ["role", "number"], class: "btn-number" },
    { text: "*", data: ["role", "operation"], class: "btn-operation span-two" },
    { text: "4", data: ["role", "number"], class: "btn-number" },
    { text: "5", data: ["role", "number"], class: "btn-number" },
    { text: "6", data: ["role", "number"], class: "btn-number" },
    { text: "+", data: ["role", "operation"], class: "btn-operation span-two" },
    { text: "7", data: ["role", "number"], class: "btn-number" },
    { text: "8", data: ["role", "number"], class: "btn-number" },
    { text: "9", data: ["role", "number"], class: "btn-number" },
    { text: "-", data: ["role", "operation"], class: "btn-operation span-two" },
    { text: ".", data: ["role", "decimal"], class: "btn-decimal" },
    { text: "0", data: ["role", "number"], class: "btn-number" },
    { text: "+/-", data: ["role", "sign-change"], class: "btn-sign" },
    { text: "=", data: ["role", "equals"], class: "btn-equals" },
  ];

  buttons.forEach(({ text, data, class: className = "" }) => {
    create("button", className, text, calculatorGrid, data);
  });

  return calculatorGrid;
}
