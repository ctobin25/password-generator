// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = parseInt(prompt("Enter how long you want your password tp be between 10 and 100"));

  var minChar = 8;
  var maxChar = 128;

  if (isNaN(passwordLength))  {

    alert("Choose a Number");

  }

  else if (passwordLength < minChar)  {

    alert("Password lemgth muct be atleast 8 characters");
    passwordLength = 0;

  }

  else if (passwordLength > maxChar)  {

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
    useSpecialChar === 
   {
    alert (
    ("You must use atleast one special character for you password");
    )}
    
    else {
      var charLower = "abcdefghijklmnopqrstuvwxyz";
      var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var charNum = "0123456789";
      var charSpecial = "<>?~!@#$%^&*";
      var charStr = "";

function randomNum(a) {
      var number = math.floor(Math.random() * a.length);
      return number;
    }
  
function pushChar(x,y)  {
      if (y) {
        charStr += x;
      }
    }

pushChar(charLower, useLowerCase);
pushChar(charUpper, useUpperCase);
pushChar(charNum, useNumeric);
pushChar(charSpecial, useSpecialChar);
  }

  for (var i = 0, passwordStr = ""; i < passwordLength; i++)  {
  }

  var passwordArray = passwordStr.split("");
  var finalPassword = passwordArray.join("");

  return finalPassword;

generateBtn.addEventListener("click", writePassword);