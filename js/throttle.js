// 节流函数
function throttle(func, delay) {
  let lastCall = 0;
  return function(...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) return;
      lastCall = now;
      return func(...args);
  }
}

// 防抖函数
function debounce(func, delay) {
  let timer;
  return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
  }
}
