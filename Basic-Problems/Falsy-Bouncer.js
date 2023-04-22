const bouncer = (arr) => {
    let trueArray = []
    for(let i = 0; i < arr.length; i++){
        if(!!arr[i] === true){
            trueArray.push(arr[i]);
        }
    }

    return trueArray;
}

const result = console.log(bouncer([7, "ate", "", false, 9]));

result;