function once(fn) {
    let done = false;
    let result;

    return function(...args) {
        if (!done) {
            done = true;
            result = fn.apply(this, args);
        }

        return result;
    }
}

const onceGreet = once(name => `Hello, ${name}`);
console.log(onceGreet("World"));  // 输出 "Hello, World"
console.log(onceGreet("Everyone"));  // 输出 "Hello, World"
