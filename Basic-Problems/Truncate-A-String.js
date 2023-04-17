const truncateString = (str, num) => {
    let trunkd = str.slice(0,num);
    if (str.length - 3 >= num || str.length < 3){
        return trunkd+= "...";
    }
    return str;
}

const result = console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

result;