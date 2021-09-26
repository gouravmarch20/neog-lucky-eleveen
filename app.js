const userDob = document.querySelector('#user-dob')
const luckyNumber = document.querySelector('#lucky-number')
const btnLuck = document.querySelector('#btn-luck')
const output = document.querySelector('#output')
const message = document.querySelector('#message')

function userDobConvertor (userDob) {
  newUserDob = userDob.replace('-', '')
  userStringDob = newUserDob.replace('-', '')
  return userStringDob
}
function addText (text) {
  message.innerText = text
}

function sumOfDob (userDob) {
  let sumOfDob = 0
  for (const iterator of userDob) {
    sumOfDob = sumOfDob + Number(iterator)
  }
  return sumOfDob
}
function checkLuck () {
  const userDobString = userDobConvertor(userDob.value)
  const sum = sumOfDob(userDobString)
  if (sum % 2 == 0) {
    output.innerHTML = `  <img src="./images/happy.gif" alt="">`
    addText('Your date of birth is lucky ')
  } else {
    output.innerHTML = `  <img src="./images/sad.gif" alt="">`
    addText('What !! Your birthday is not lucky.    ')
  }
}
btnLuck.addEventListener('click', checkLuck)
