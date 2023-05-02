const sumFibs = (num) => {
  let seq = [1, 1];

  let sum = 2;

  for (let i = 2; i < num; i++) {
    seq[i] = seq[i - 1] + seq[i - 2];
    if (seq[i] % 2 === 1 && seq[i] <= num) {

      sum += seq[i];
    }
  }
  return sum;
};

const result = console.log(sumFibs(4));
result;
