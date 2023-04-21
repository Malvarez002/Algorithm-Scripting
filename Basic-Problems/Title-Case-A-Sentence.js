const titleCase = (str) => {
  str = str.toLowerCase();
  let splited = str.split(" ");
  let upperCased = "";
  console.log(splited);
  for (let i = 0; i < splited.length; i++) {
    for (let j = 0; j < splited[i].length; j++) {
      if (j === 0) {
        upperCased += splited[i][j].toUpperCase();
      } else {
        upperCased += splited[i][j];
      }
    }
    upperCased += " ";
  }
  return upperCased;
};

const result = console.log(titleCase("I'm a little tea pot"));

result;
