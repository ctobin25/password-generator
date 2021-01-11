function passwordGenerator() {
    var charLength = document.getElementById('maxLength').value;
    if(charLength > 128 || charLength < 8){
        alert('charlength does not meet requirement');
        return;
    }
    var specialChars = document.getElementById('specialChars').checked;
    var num = document.getElementById('num').checked;
    var lowerCase = document.getElementById('lowerCase').checked;
    var upperCase = document.getElementById('upperCase').checked;
    if(specialChars === false && num === false && !lowerCase && !upperCase){
        alert('Must pick one');
        return;
    }


    var passwordChoices = ''
    var listSpecial = '!@#$%^&*()'
    if(specialChars === true){
        passwordChoices += listSpecial;
    }
    var listNum = '1234567890'
    if(num){
        passwordChoices += listNum;
    }
    var lowercaseList = 'abcdef';
    if(lowerCase){
        passwordChoices += lowercaseList;
    }
    var uppercaseList = 'ABCDE';
    if(upperCase){
        passwordChoices += uppercaseList;
    }
    passworChoices(passwordChoices, charLength)
}