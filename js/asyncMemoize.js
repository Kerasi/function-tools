function asyncMemoize(func) {
  let cache = {};
  return async function(...args) {
      let key = JSON.stringify(args);
      if (cache[key]) {
          return cache[key];
      } else {
          let result = await func.apply(null, args);
          cache[key] = result;
          return result;
      }
  }
}

const slowAsyncFunction = async (n) => {
  // 这里模拟一些耗时的异步操作
  await new Promise(resolve => setTimeout(resolve, 2000));
  return n * n;
}

const memoizedAsyncFunction = asyncMemoize(slowAsyncFunction);

memoizedAsyncFunction(3).then(console.log); // 首次调用，会等待 2 秒
memoizedAsyncFunction(3).then(console.log); // 第二次调用，会立即返回结果
