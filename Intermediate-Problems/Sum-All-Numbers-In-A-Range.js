const sumAll = (arr) => {
    let sortedArr = arr.sort((a,b) => a - b);
    let total = 0;
    for(let i = sortedArr[0]; i <= sortedArr[1]; i++){
        total += i;
    }
    return total;
}

const result = console.log(sumAll([5, 10]))

