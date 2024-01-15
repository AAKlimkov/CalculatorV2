import create from "../Utils/create";

export default function createCalculatorUI() {
  const calculatorGrid = create("div", "calculator-grid", null, document.body);

  const output = create("div", "output", null, calculatorGrid);
  create("div", "previous-operand", null, output, [
    "data-previous-operand",
    "",
  ]);
  create("div", "current-operand", "0", output, ["data-current-operand", ""]);

  const buttons = [
    { text: "AC", data: ["role", "clear"], class: "btn-clear" },
    { text: "DEL", data: ["role", "delete"], class: "btn-delete" },
    { text: "%", data: ["role", "operation"], class: "btn-operation" },
    { text: "/", data: ["role", "operation"], class: "btn-operation span-two" },
    { text: "9", data: ["role", "number"], class: "btn-number" },
    { text: "8", data: ["role", "number"], class: "btn-number" },
    { text: "7", data: ["role", "number"], class: "btn-number" },
    { text: "*", data: ["role", "operation"], class: "btn-operation span-two" },
    { text: "6", data: ["role", "number"], class: "btn-number" },
    { text: "4", data: ["role", "number"], class: "btn-number" },
    { text: "5", data: ["role", "number"], class: "btn-number" },
    { text: "+", data: ["role", "operation"], class: "btn-operation span-two" },
    { text: "3", data: ["role", "number"], class: "btn-number" },
    { text: "2", data: ["role", "number"], class: "btn-number" },
    { text: "1", data: ["role", "number"], class: "btn-number" },
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
