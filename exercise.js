const isLower = char => {
  if (/[a-z]/.test(char)) {
    return true
  }
  return false
}

const isUpper = char => {
  if (/[A-Z]/.test(char)) {
    return true
  }
  return false
}

const isLetter = char => {
  return isLower(char) || isUpper(char)
}

function rot13(string) {
  const ROTATION = 13;
  const UPPER_CHAR_CODE_START = 65;
  const UPPER_CHAR_CODE_END = 91;
  const LOWER_CHAR_CODE_START = 97;
  const LOWER_CHAR_CODE_END = 123;
  let rotated = '';
  let asciiCode;
  for (let index = 0; index < string.length ; index++) {
    asciiCode = string.charCodeAt(index)
    if (isLetter(string[index])) {
      if (isUpper(string[index])) {
        asciiCode = UPPER_CHAR_CODE_START + (((asciiCode + ROTATION) % UPPER_CHAR_CODE_END) % UPPER_CHAR_CODE_START)
      } else {
        asciiCode = LOWER_CHAR_CODE_START + (((asciiCode + ROTATION) % LOWER_CHAR_CODE_END) % LOWER_CHAR_CODE_START)
      }
    }
    rotated += String.fromCharCode(asciiCode);
  }
  return rotated
}

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));