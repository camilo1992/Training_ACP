// Factorial example

const findFactorial = (n) => {
  let total;
  if (n === 1) return 1;
  return n * findFactorial(n - 1);
};

console.log(findFactorial(4));
