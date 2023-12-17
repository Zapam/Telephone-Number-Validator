function telephoneCheck(str) {

  if (str.match(/^[^0-9\s()]/)) {
    return false;
  }

  if (str.match(/[^0-9-()\s]/)) {
    return false;
  }

  if (str[0] === '-') return false

  if (str.indexOf("(") == -1 && str.indexOf(")") > 0) {
    return false
  }

  if (str.indexOf(")") - str.indexOf("(") >= 5) {
    return false
  }

  let regex = /-| /g
  let cleanPhoneNum = str.replace(regex, "")
  console.log(cleanPhoneNum);

  if (cleanPhoneNum.indexOf("(") < cleanPhoneNum.indexOf(")")) {
    cleanPhoneNum = cleanPhoneNum.replace(/\(|\)/g, "")
  }

  if (cleanPhoneNum.length == 10) {
    return true
  } else if (cleanPhoneNum.length == 11 && cleanPhoneNum[0] === '1') {
    return true
  } else {return false}
}

let result = telephoneCheck("55 55-55-555-5");
console.log(result);