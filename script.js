// Variables
// let a
// let b
// const e = 0

// assigment
const c = "name";
console.log(c);

//  primitives datatypes

//  numbers
// const age = 10

// booleans
// const isDorineAngryAtheJSTeacher = true

// String
const student1 = "Dorren";
const student2 = "Tally";
const mondayTeacher = `Emma will teach ${student1} and ${student2}`;
console.log(mondayTeacher);

//  complex datatype

// Arrays
const arr1 = [];
// const arr2 = [4] // arrays with 4 spaces empty
arr1[3] = 5; // in position 3 put the value 5
arr1.push(4); // in a la fin du array ajoute 4
arr1.pop(); // ca va montrer le denier index en le retirant
arr1.at(2); // ca va te donner la position de ta valeur en le laissant

// Set is like an array

// const set = new set();

// Objects
const teachers = {
  javascript: "Carlson",
  react: "Giles",
  node: "Leonard",
};
console.log({ ...teachers }); // print teachers
const profs = teachers;
profs.javascript = "jules"; // Carleson = jules
console.log({ ...profs }, { ...teachers }); // la var profs aura les meme propr de teacher et les deux changerons leur noms javascript en jules
const role = teachers.javascript; // to get a value of an object
console.log(role);
const role1 = teachers.javascript; // to get a value of an object
console.log(role1);

// conditional logic

// LOOPS
//  FUNCTION
// function log(message, status="error"){
//   return `${new Date().toUTCString()} ${status}  ${message} `;
// }

const log = (message, status = "error") =>
  `${new Date().toUTCString()} ${status}  ${message} `; // Anonyms function
log();

function craeteLogger() {
  // higher order function (function that return another function)
  function writeToConsole(message, status) {
    // console.log(log(a, b));
  }
  return writeToConsole;
}

const logger = craeteLogger();
logger("my name");
console.log("this is my name");

// function as a parameter

const studentsList = Array(500)
  .fill(0)
  .map((_) => Math.floor(Math.random()) * 10);

function findUpperHalf(callback) {
  for (const student of studentsList) {
    if (student >= 5) {
      console.log(callback);
    }
  }
}
findUpperHalf(callback);

// Closure

function printSum() {
  let sum = 0;
  findUpperHalf((number) => {
    sum += number;
  });
  logger(sum);
}

printSum();

// FibonacciFunctions

const fib = (n) => {
  // simple manner
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};
fib(n);

const optimizedFib = () => {
  if (n < 2) return n;
  const memo = { 0: 0, 1: 1 };
  const i = 2;
  while (i <= 0) {}
};
optimizedFib();

// reduce function

const summingFib = () => {
  const sum = studentsList.reduce((acc, number, index, array) => {
    if (number >= 5) {
      acc.push(number);
    }
    return acc;
  }, 0);
  logger(sum, "");
};
summingFib();
