// Variable declaration using let

const result = 6;
declareVariables = (_result) => {
  let x;
  console.log(x); // undefined
  const y = 2;
  console.log(y); // 2

  // Variables naming
  const $a = "Jesus";
  console.log($a); // Jesus
  const _b = "Holly";
  console.log(_b); // Holly
};
declareVariables(result);

// Constants declaration using const

const result1 = 7;
declareConstants = (_result1) => {
  console.log(result1);
  const x = 5;
  console.log(x);
};
declareConstants(result1);

// JS data types

const result2 = 8;
dataTypes = (_result2) => {
  // Strings
  const name = "Lontsi";
  const surname = "Mesmer";
  const result = `The names are ${name} and ${surname}`;
  console.log(result);

  // Number
  const number = 3e5;
  console.log(number);
  const number1 = 3 / 0;
  console.log(number1);
  const number2 = "abc" / 3;
  console.log(number2);

  // BigInt
  const value = 900719925124740998n;
  const result1 = value + 1n;
  console.log(result1);

  // undefined
  let age;
  console.log(age);
  const result2 = undefined;
  console.log(result2);

  // Typeof operator
  const firstName = "Lontsi";
  console.log(typeof firstName);
  const _class = 1;
  console.log(typeof _class);
  const a = null;
  console.log(typeof(a));
};
dataTypes(result2);

// Operators in javascript

const result3 = 9;
writeOperations = (_result3) => {
  let x = 2;
  y = 3;
  const add = x + y;
  console.log("x + y =", add);
  const minus = x - y
  console.log('x - y =', minus);
  const multiple = x * y
  console.log('x * y =', multiple);
  const divide = x / y
  console.log('x / y =', divide);
};
writeOperations(result3);
