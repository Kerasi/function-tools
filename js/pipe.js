function pipe(...fns) {
  return function piped(arg) {
      return fns.reduce((value, fn) => fn(value), arg);
  }
}

const addOne = x => x + 1;
const double = x => x * 2;
const pipedFunction = pipe(addOne, double);

console.log(pipedFunction(2)); // 输出 6 => 2 + 1 => (2 + 1) * 2
