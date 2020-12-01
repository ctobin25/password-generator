// Assignment Code

console.log("JS loaded!");

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var minChar = 8;
  var maxChar = 128;

  var passwordLength = parseInt(prompt("Enter how long you want your password tp be between 8 and 128"));

  if (isNaN(passwordLength)) {
    alert("Choose a Number");
  }

  else if (passwordLength < minChar) {
    alert("Password length must be at least 8 characters");
    passwordLength = 0;
  }

  else if (passwordLength > maxChar) {
    alert("Password length must not surpass 128 characters");
    passwordLength = 0
  }

  else {
    var useLowerCase = confirm("Click OK to use lowercase characters");
    var useUpperCase = confirm("Click OK to use uppercase characters");
    var useNumeric = confirm("Click OK to use numbers");
    var useSpecialChar = confirm("Click OK to use special characters");
  }

  if (
    useLowerCase === false &&
    useUpperCase === false &&
    useNumeric === false &&
    useSpecialChar === false
  ) {
    alert("You must use at least one special character for your password");
  }

  var possibleChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>?~!@#$%^&*";


  var passwordStr = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = getRandomInt(possibleChars.length);
    passwordStr += possibleChars.charAt(randomIndex);
  }

  return passwordStr;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
