const uniteUnique = (arr, ...args) => {
  let uniqueArr = arr.filter((value, index) => {
    return arr.indexOf(value) === index;
  });

  for (let arrays of args) {
    for (let char of arrays) {
      if (uniqueArr.indexOf(char) < 0) {
        uniqueArr.push(char);
      }
    }
  }
  return uniqueArr;
};

const result = console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));
result;
