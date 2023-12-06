// Selectors

// By id
const heading = document.getElementById('heading1')
console.log(heading)

// Class name
const headings = document.getElementsByClassName('heading1')
for (const h of headings) {
  console.log(h)
}

// by TagName
// const button = document.getElementsByTagName('h1')

// querySelector
const specificHeading = document.querySelector('h1.heading#heading1')

// querySelectorAll
const heading2 = document.querySelectorAll('h1')

// classname
console.log(heading.className)
heading.className = 'primaryHeading'
console.log(heading.classList.toggle('primaryHeading'))

// manipulating css
console.log(heading.style)
heading.style.color = 'blue'
heading.style.border = '5px solid orange'

const myImpossibleButton = document.querySelector('button')
myImpossibleButton.addEventListener('mouseenter', (e) => {
  const newDiv = document.createElement('div')
  heading.append(myImpossibleButton)
})

const bestInput = document.getElementById('bestInput')
bestInput.addEventListener('keydown', (e) => {
  console.log(e)
})

const myForm = document.querySelector('form')

myForm.addEventListener('submit', (e) => {
  const person = {
    name: e.target.name.value,
    email: e.target.value,
    address: e.target.address.value
  }
})
