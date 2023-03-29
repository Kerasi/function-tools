/**
 * @description 根据传入的运算符号完成多个参数计算
 * @param {String} operation 传入一个运算符号
 * @returns 返回计算函数
 */

function calculate(operation) {
  return function(...args) {
    let maxDecimal = Math.max(...args.map(x => (x.toString().split('.')[1] || '').length));
    let intArgs = args.map(x => parseInt(x * Math.pow(10, maxDecimal)));
    let result = intArgs.reduce((acc, val) => {
      switch (operation) {
        case '+':
          return acc + val;
        case '-':
          return acc - val;
        case '*':
          return acc * val;
        case '/':
          return acc / val;
        default:
          return acc;
      }
    });
    return result / Math.pow(10, maxDecimal);
  };
}

// e.g.
const add = calculate('+');
console.log(add(0.1, 0.2)); // => 0.3
console.log(add(0.1, 0.2, 0.3)); // => 0.6
console.log(add(-0.1, -0.01)); // => -0.11
