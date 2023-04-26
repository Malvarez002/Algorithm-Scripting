const diffArray = (arr1, arr2) => {
  const newArr = [];

  function inArr1(first, second) {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }
  inArr1(arr1,arr2);
  inArr1(arr2,arr1);

  return newArr;
};

const result = console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);

result;
