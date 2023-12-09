// Variable declaration using let
const result = 6;

declareVariables = (_result) => {
  console.log(result); // 6
  let x;
  console.log(x); // undefined
  let y = 2;
  console.log(y); // 2

  // Variables naming

  let $a = "Jesus";
  console.log($a); // Jesus
  let _b = "Holly";
  console.log(_b); // Holly

  // Js Keywords can't be variable names
//   let type = "object";
//   const name = new type(arguments);
//   console.log(name); // The keyword here is new

//   const array = Array.fill(0);
//   console.log(array); // The keyword here is Array.fill
};
declareVariables(result);
