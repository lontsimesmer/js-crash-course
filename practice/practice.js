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
  console.log(typeof a);
};
dataTypes(result2);

// Operators in javascript

const result3 = 9;
writeOperations = (_result3) => {
  // Arithmetic
  let x = 2;
  let y = 3;
  const add = x + y;
  console.log("x + y =", add);
  const minus = x - y;
  console.log("x - y =", minus);
  const multiple = x * y;
  console.log("x * y =", multiple);
  const divide = x / y;
  console.log("x / y =", divide);
  const remainder = x % y;
  console.log("x % y =", remainder);
  const increase = ++x;
  console.log("++x =", increase);
  console.log("++x =", x++);
  const decrease = --y;
  console.log("--y =", decrease);
  console.log("--y =", y--);
  const exponent = x ** y;
  console.log(exponent);

  // Comparison
  const a = 1;
  const b = 2;
  const c = 3;
  console.log(a == a);
  console.log(2 == "2");
  console.log(a == "a");
  console.log(a != b);
  console.log(b != c);
  console.log(b === b);
  console.log(b === "b");
  console.log(c !== "c");
  console.log(c !== c);
  console.log(a > b);

  // Logical
  const m = 5;
  const n = 4;
  const andLogic = m > n && n < m;
  console.log(andLogic); // true
  console.log(m > 4 && n < 5);
  console.log(true && false); // false
  const orLogic = n < m || n > m;
  console.log(orLogic); // true
  console.log(n < 6 || m > 7);
  console.log(false || false); // false
  const notLogic = !true;
  console.log(notLogic); // false
  console.log(!false); // true
  console.log(true && false); // false
  console.log(true && true); // true
  console.log(!true || !false); // true

  // String operators
  console.log("hello" + " " + "world");
  let value = "JavaScript";
  console.log((value += "tutorial"));
};
writeOperations(result3);

// Type Conversion

const result4 = 10;
typeConvert = (_result4) => {
  // Implicit conversion
  let value = "2" + 5; // "25"
  console.log(value);
  let value1 = "3" + true;
  console.log(value1); // "3true"

  let value2 = "4" - "2";
  console.log(value2); // 2
  let value3 = "4" * "2";
  console.log(value3); // 8
  let value4 = "4" / "2";
  console.log(value4);

  const res = "hello" - "world";
  console.log(res); // NaN
  const res1 = "4" - "Hello";
  console.log(res1); // NaN
  const res2 = "4" - true;
  console.log(res2); // 3
  const res3 = "4" - false;
  console.log(res3); // 4
};
typeConvert(result4);
