const repeatStringNumTimes = (str, num) => {
  if (num < 1) {
    return "";
  }
  let repeatedStr = "";
  for (let i = 0; i < num; i++) {
    repeatedStr+=str;
  }
  return repeatedStr;
};

const result = console.log(repeatStringNumTimes("abc", 4));
