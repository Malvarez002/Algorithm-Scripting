const fearNotLetter = (str) => {
  str = str.toLowerCase();
  let abc = "abcdefghijklmnopqrstuvwxyz";

  let indexOfString = abc.indexOf(str[0]);
  for (let i = 0; i < str.length; i++) {
    console.log(str[i], abc[indexOfString]);
    if (str[i] === abc[indexOfString]) {
    } else if (str[i] !== abc[indexOfString]) {
      return abc[indexOfString];
    }
    indexOfString++;
  }
};

const result = console.log(fearNotLetter("stvwx"));
result;
