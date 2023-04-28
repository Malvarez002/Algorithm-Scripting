const pairElement = (str) => {
  const nucleos = ["A", "T", "C", "G"];
  let copy = [];
  str = str.split("");
  str.forEach((char) => {
    let pair = [];
    if (char === nucleos[0]) {
      pair.push(nucleos[0], nucleos[1]);
    } else if (char === nucleos[1]) {
      pair.push(nucleos[1], nucleos[0]);
    } else if(char === nucleos[2]){
        pair.push(nucleos[2], nucleos[3])
    } else if(char === nucleos[3]){
        pair.push(nucleos[3], nucleos[2])
    }
    copy.push(pair)
  });
  return copy;
};

const result = console.log(pairElement("ATCGA"));

result;
