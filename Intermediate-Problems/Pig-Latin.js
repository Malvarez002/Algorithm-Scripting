const translatePigLatin = (str) => {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
};

const result = console.log(translatePigLatin("console"));

result;
