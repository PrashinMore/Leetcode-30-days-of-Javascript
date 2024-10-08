var filter = function (arr, fn) {
  const resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      resultArray.push(arr[i]);
    }
  }
  return resultArray;
};
