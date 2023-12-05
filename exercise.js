// Pangram exercise

const string = 'the quick brown dog jumps over the lazy fox'

function printPangram (string) {
  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]
  const newString = string.split('').filter((a) => a !== '')
  for (let i = 0; i < letters.length; i++) {
    if (newString.indexOf(letters[i]) === -1) {
      console.log('not pangram')
    }
  }
  console.log('pangram')
}
printPangram(string)

// Palindrom checker

const phrase = 'nurses run'

function palindromChecker (phrase) {
  const remove = /[\W_]/g
  const string = phrase.replace(remove, '').trim()
  const newPhrase = string.split('').reverse().join('')
  console.log(newPhrase)
}
palindromChecker(phrase)

// Largest number

const numbers = Math.max(5, 10, 15, 20, 25, 30, 35, 40, 45, 50)
console.log(numbers)

// Factorial sum

const num = 6
function factorialSum (num) {
  let sum = 0
  let fac = 1
  for (let i = 2; i <= num; i++) {
    fac = fac * i
    sum += fac
  }
  console.log(fac)
}
factorialSum(num)
