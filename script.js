function passwordGenerator() {
    var charLength = document.getElementById('maxLength').value;
    if(charLength > 128 || charLength < 8){
        alert('Needs to be more than 8 characters');
        return;
    }
    var specialChars = document.getElementById('specialChars').checked;
    var num = document.getElementById('num').checked;
    var lowerCase = document.getElementById('lowerCase').checked;
    var upperCase = document.getElementById('upperCase').checked;
    if(specialChars === false && num === false && lowerCase === false && upperCase === false ){
        alert('Got to click one');
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
function passworChoices(passwordChoices, charLength) {
    console.log('passwordChoices', passwordChoices);
    console.log('charLength', charLength);
    var passwordGenerated = '';
    for (let i = 0; i < charLength; i++) {
        var randomChar = Math.floor(Math.random() * passwordChoices.length);
        passwordGenerated += passwordChoices[randomChar];  
    }
    console.log('passwordGenerated', passwordGenerated);
}