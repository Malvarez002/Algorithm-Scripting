const binaryAgent = (str) => {
  const binaryArr = str.split(" ");
  let result = "";
  binaryArr.forEach((char, index) => {
    let decimal = parseInt(char, 2);
    let character = String.fromCharCode(decimal);
    result += character;
  });
  return result;
};
