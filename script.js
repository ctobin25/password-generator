// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

edit
play_arrow

brightness_4
<!DOCTYPE HTML>  
<html>  
  
<body style = "text-align:center;">  

      
    <button onclick = "gfg_Run()">  
        Click Here 
    </button> 
      
      
    <script> 
        var el_down = document.getElementById("password"); 
          
        function gfg_Run() { 
            el_down.innerHTML =  
                Math.random().toString(36).slice(2) +  
                Math.random().toString(36) 
                    .toUpperCase().slice(2); 
            }  
    </script>  
</body>  
  
</html>  



// Variables to go into pw

var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*=-_';


var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var submit = document.getElementById("submit");
var yourPw = document.getElementById("yourPw");



submit.addEventListener("click",function(e){
  var characters = char;
  (numBox.checked) ? characters += num : '';
  (symBox.checked) ? characters += sym : '';
  yourPw.value = password(charNum.value, characters);
});

function password(l,characters){
  var pwd = '';
  for(var i = 0; i<l; i++){
      pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;
}

Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
