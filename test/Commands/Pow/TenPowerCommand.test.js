import TenPowerCommand from "../../../src/Calculator/Commands/Pow/TenPowerCommand";
import Calculator from "../../../src/Calculator/calculator";

describe("TenPowerCommand", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("Execute TenPowerCommand", () => {
    calculator.enterNumber("2");
    calculator.enterNumber("0");

    const tenPowerCommand = new TenPowerCommand(calculator);
    tenPowerCommand.execute();

    expect(calculator.currentOperand).toBe("100000000000000000000");
    expect(calculator.displayValue).toBe("100000000000000000000");
  });

  test("Undo TenPowerCommand", () => {
    calculator.enterNumber("5");
    calculator.enterNumber("0");

    const tenPowerCommand = new TenPowerCommand(calculator);
    tenPowerCommand.execute();

    tenPowerCommand.undo();

    expect(calculator.currentOperand).toBe("0");
    expect(calculator.displayValue).toBe("0");
  });

  test("Execute TenPowerCommand with decimal value", () => {
    calculator.enterNumber("3");
    calculator.decimal();

    const tenPowerCommand = new TenPowerCommand(calculator);
    tenPowerCommand.execute();

    expect(calculator.currentOperand).toBe("1000");
    expect(calculator.displayValue).toBe("1000");
  });

  test("Undo TenPowerCommand with decimal value", () => {
    calculator.enterNumber("7");
    calculator.decimal();

    const tenPowerCommand = new TenPowerCommand(calculator);
    tenPowerCommand.execute();

    tenPowerCommand.undo();

    expect(calculator.currentOperand).toBe("0");
    expect(calculator.displayValue).toBe("0");
  });
});
