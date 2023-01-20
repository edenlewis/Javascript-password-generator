// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generate();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// var slider = document.getElementById("myRange");
// var output = document.getElementById("amount");
// output.innerHTML = slider.value;
// slider.oninput = function(){
//   output.innerHTML = this.value;
// }
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const characters = ['!', '@', '#', '%', '&', '*'];
const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// const generatePassword = (length, hasNumber, hasSymbols, hasLowercase, hasUppercase) =>{
//   let availableCharacters = [
//     (hasSymbols ? symbols : [])
//     (hasNumbers ? numbers : [])
//     (hasUppercase ? uppercaseLetters : [])
//     (hasLowercase ? lowercaseLetters : [])
//   ]
// console.log (availableCharacters);

// }

// generatePassword(12, true, true, true, true)

// Add event listener to generate button

const generate = () => {
  const length = parseInt(prompt("what length would you like it?"));
  if (length < 8){
    alert("password length is to short")
    return
  }
  if (length > 129){
    alert("password length is to long")
    return
  }
  const availableCharacters = [];
  const number = confirm("do you want numbers?");
  const lowercaseLetter = confirm("do you want lowercase letters?");
  const uppercaseLetter = confirm("do you want  UPPERCASE letters?");
  const symbol = confirm("do you want symbols?");

  console.log(number, lowercaseLetter, uppercaseLetter, symbol)


  if (number === true) {
    availableCharacters.push(...numbers)
  }
  if (lowercaseLetter === true) {
    availableCharacters.push(...lowercaseLetters)
  }
  if (uppercaseLetter === true) {
    availableCharacters.push(...uppercaseLetters)
  }
  if (symbol === true) {
    availableCharacters.push(...characters)
  }
  console.log(availableCharacters)

// make forloop have it run as many times as user wants password length to be 
// math.floor math.random using availble characters
// return the random generated password

  let password = []
  for (var i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    let gettingValue = availableCharacters[randomIndex]
    password.push(gettingValue)

  }
  console.log(password)
  return password.join("");

}




generateBtn.addEventListener("click", writePassword);

