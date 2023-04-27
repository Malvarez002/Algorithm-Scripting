const spinalCase = (str) => {

  let spinal = str
  .replace(/([a-z])([A-Z])/g, '$1 $2')
  .replace(/[_\W]/g, ' ')
  .trim()
  .toLowerCase()
  .replace(/\s+/g, '-')
  
  
  return spinal;
};

const result = console.log(spinalCase("The_Andy_Griffith_Show"));

result;
