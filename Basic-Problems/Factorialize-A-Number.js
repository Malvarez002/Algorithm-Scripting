const factorialize = (n) => {
    let total = 1;
    for(let i = 1; i<= n; i++){
        total *= i;
    }
    return total;
}
const result = console.log(factorialize(5));

result;