// Object with functions for the operations add, subtract, divide, and multiply
const calculator = {
  add: function (num1: number, num2: number): number {
    return num1 + num2;
  },
  subtract: function (num1: number, num2: number): number {
    return num1 - num2;
  },
  multiply: function (num1: number, num2: number): number {
    return num1 * num2;
  },
  divide: function (num1: number, num2: number): number | string {
    if (num2 === 0) {
      return "Cannot divide by zero.";
    }
    return num1 / num2;
  },
};

// Example usage:
calculator.add(5, 3); // 8
calculator.subtract(7, 2); // 5
calculator.multiply(4, 6); // 24
calculator.divide(10, 2); // 5
calculator.divide(8, 0); // "Cannot divide by zero"

export default calculator;
