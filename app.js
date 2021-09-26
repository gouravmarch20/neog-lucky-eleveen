const userDob = document.querySelector('#user-dob')
const luckyNumber = document.querySelector('#lucky-number')
const btnLuck = document.querySelector('#btn-luck')
const output = document.querySelector('#output')
const message = document.querySelector('#message')
const privacyConcern = document.querySelector('#privacy-concern')

function userDobConvertor (userDob) {
  newUserDob = userDob.replace('-', '')
  userStringDob = newUserDob.replace('-', '')
  return userStringDob
}
function addText (text) {
  message.innerText = text
  message.style.background = '#B9345A'
}

function sumOfDob (userDob) {
  let sumOfDob = 0
  for (const iterator of userDob) {
    sumOfDob = sumOfDob + Number(iterator)
  }
  return sumOfDob
}
function checkLuck () {
  if (userDob.value  == false ) {
    console.log(userDob.value)
    alert('fill form carefully ')
    return
  }

  const userDobString = userDobConvertor(userDob.value)
  const sum = sumOfDob(userDobString)

  // if (sum % Number(luckyNumber.value) == 0) {
  if (sum % Number(2) == 0) {
    output.innerHTML = `  <img src="./images/happy.gif" alt="">`
    addText('Your date of birth is lucky ')
  } else {
    output.innerHTML = `  <img src="./images/sad.gif" alt="">`
    addText('What !! Your birthday is not lucky.    ')
  }
}
btnLuck.addEventListener('click', checkLuck)
privacyConcern.addEventListener("click" , ()=>{
  privacyConcern.style.display = "none"
})