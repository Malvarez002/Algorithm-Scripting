const confirmEnding = (str, target) => {
  const strEnding = str.slice(str.length - target.length);
  return strEnding === target ? true : false;
};

const result = console.log(confirmEnding("Congratulation", "on"));

result;
