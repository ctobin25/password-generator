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
