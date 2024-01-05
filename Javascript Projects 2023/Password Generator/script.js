let passwordGeneratorButton = document.getElementById('passwordgeneratorbutton');

passwordGeneratorButton.addEventListener('click', function(){
  let characters = ['a', 'b', 'c', 'd','e','f','g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let characterAmount = parseInt(prompt('How many characters do you want'));
  let generatedPassword = [];
  let i = 0
  while(i !== characterAmount){
    generatedPassword.push(characters[Math.floor(Math.random() * characters.length -1)]);
    i++;
    if(i == characterAmount){
      alert(generatedPassword);
    }
  }
  


})