const frankenSplice = (arr1, arr2, n) => {
  let newArr = arr2.slice();

  for (let i = arr1.length - 1; i >= 0; i--) {
    newArr.splice(n, 0, arr1[i]);
  }
  return newArr;
};

const result = console.log(
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
);

result;
