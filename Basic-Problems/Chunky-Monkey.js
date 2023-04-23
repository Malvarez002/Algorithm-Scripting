const chunkArrayInGroups = (arr, size) => {
  let bigArr = [];
  for (let i = 0; i < arr.length; i += size) {
    let chunk = [];
    let pushed = i;
    for (let j = 1; j <= size && pushed < arr.length; j++) {
      chunk.push(arr[pushed]);
      pushed++;
    }
    bigArr.push(chunk);
  }
  return bigArr;
};

const result = console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
