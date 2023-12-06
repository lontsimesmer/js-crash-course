// Asynchronous programming

function sleep (time) {
  return new Promise((resolve, reject) => {
    if (time > 2000) {
      reject('Too big value')
      return
    }
    setTimeout(() => {
      resolve(time * 5)
    }, time)
  })
}

async function loadNumbers () {
  const list = Array(30)
    .fill(0)
    .map((_, i) => i + 1)

  for (const number of list) {
    console.log(number)
    await sleep(1000)
  }
  //   sleep(500)
  //     .then(() => {
  //       console.log(2);
  //       return sleep(500);
  //     })
  //     .then(() => {
  //       console.log(3);
  //     })
  //     .catch((error) => {
  //       console.trace(error);
  //       return 3;
  //     })
  //     .then(console.log)
  //     .finally(() => {
  //       console.log("Done");
  //     });
}

async function fetchNumber () {
  let time = (300).slice()
  console.log(1)
  time = await sleep(time)
  console.log(2)
  time = await sleep(time)
  console.log(3)
  await sleep(time)
  console.log('Done')
}

// Try-Catch method

async function loadNumber () {
  try {
    let time = 300
    console.log(1)
    time = await sleep(time)
    console.log(2)
    time = await sleep(time)
    console.log(3)
    await sleep(time)
    console.log('Done')
  } catch (error) {
    console.trace(error)
  }
}

// Return several promises

const promises = [sleep(300), sleep(500), sleep(1000)]
Promise.all(promises)

loadNumbers().then((text) => {
  console.log('Complete', text)
})
