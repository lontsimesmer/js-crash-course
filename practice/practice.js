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
};
declareVariables(result);


// Const declaration using const

const results = 7
declareConstants = (_results) => {
  console.log(results);
  const x = 5;
  console.log(x);
}
declareConstants(results)
