var createCounter = function (n) {
  let number = n - 1;
  return function () {
    number = number + 1;
    return number;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
