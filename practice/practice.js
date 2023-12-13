// Variable declaration using let

const result = 6
declareVariables = (_result) => {
  console.log(result) // 6
  let x
  console.log(x) // undefined
  const y = 2
  console.log(y) // 2

  // Variables naming
  const $a = 'Jesus'
  console.log($a) // Jesus
  const _b = 'Holly'
  console.log(_b) // Holly
}
declareVariables(result)


// Const declaration using const

const result1 = 7
declareConstants = (_result1) => {
  console.log(result1)
  const x = 5
  console.log(x)
}
declareConstants(result1)


// JS data types

const result2 = 8
dataTypes = (_result2) => {

  // Strings
  const name = 'Lontsi'
  const surname = 'Mesmer'
  const result = `The names are ${name} and ${surname}`
  console.log(result);

  // Number
  const number = 3e5
  console.log(number);
  const number1 = 3/0
  console.log(number1);
  const number2 = 'abc'/3
  console.log(number2);
}
dataTypes(result2)
