function hasLowerCase(password, index) {
  return password.charCodeAt(index) >= 97 && password.charCodeAt(index) <= 122
}

function hasUpperCase(password, index) {
  return password.charCodeAt(index) >= 65 && password.charCodeAt(index) <= 90
}

function hasNum(password, index) {
  return password.charCodeAt(index) >= 48 && password.charCodeAt(index) <= 57
}

const validatePassword = (password) => {
  if (password.length < 8) return false
  let upper = 0
  let lower = 0
  let num = 0
  let special = 0

  for (let i = 0; i < password.length; i++) {
    if (hasLowerCase(password, i)) {
      lower++
    } else if (hasUpperCase(password, i)) {
      upper++
    } else if (hasNum(password, i)) {
      num++
    } else {
      special++
    }
  }
  return lower > 0 && upper > 0 && num > 0 && special > 0
}

module.exports = validatePassword