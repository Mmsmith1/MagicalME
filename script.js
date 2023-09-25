function NPanswer(){
  var password= document.getElementById("NPquestion");
  var passwordText = password.value;
  if(passwordText=="63"){
     return true;
     }
  alert("Incorrect, try again!");
   return false;
}