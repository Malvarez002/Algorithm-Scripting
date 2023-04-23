const getIndexToIns = (arr, num) => {
  let newArr = arr.sort((a, b) => a - b);

  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < newArr.length; i++) {
    if (num <= newArr[i]) return i;
  }
  return newArr.length;
};

const result = console.log(getIndexToIns([2, 5, 10], 15));

result;
