const myReplace = (str, before, after) => {
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substr(1);
    console.log(after);
  } else if (/^[a-z]/.test(before)) {
    after = after[0].toLowerCase() + after.substr(1);
    console.log(after);
  }
  const arr = str.split(" ");
  arr.splice(arr.indexOf(before), 1, after);
  return arr.join(" ");
};

const result = console.log(
  myReplace("I think we should look up there", "up", "Down")
);

result;
