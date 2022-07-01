// Factorial example

const findFactorial = (n) => {
  let total;
  if (n === 1) return 1;
  total = n * findFactorial(n - 1);
  return total;
};

console.log(findFactorial(5));
