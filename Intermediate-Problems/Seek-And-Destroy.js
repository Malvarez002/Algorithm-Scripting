const destroyer = (arr, ...args) => {

  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < args.length; j++) {
      if(arr[i] === args[j]){
        console.log(arr[i], args[j])
        arr.splice(i,1)
      }
    }
  }
  return arr
};

const result = console.log(destroyer([2, 3, 2, 3], 2, 3));

result;
