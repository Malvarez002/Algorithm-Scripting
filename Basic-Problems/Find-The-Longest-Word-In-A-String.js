const findLongestWordLength = (str) => {
    let length = 0;
    let words = str.split(" ");
    for(let i = 0; i < words.length; i++){
        if(words[i].length > length){
            length = words[i].length;
        }
    }
    return length;
}

const result = console.log(findLongestWordLength('pie is a great food'));

result;