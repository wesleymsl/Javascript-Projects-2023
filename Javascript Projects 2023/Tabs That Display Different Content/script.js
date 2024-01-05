let home = document.getElementById('home');
let contact = document.getElementById('contact');
let games = doucment.getElementById('games');
let contactdiv = doucment.querySelector('.contactdiv');
let homediv = document.querySelector('.homediv');
let gamesdiv = document.querySelector('.gamesdiv');
gamesdiv.style.display = 'none';
contactdiv.style.display = 'none';


games.addEventListener('click', function(){
  gamesdiv.style.display = 'block';
  contactdiv.style.display = 'none';
  homediv.style.display = 'none'
});

contact.addEventListener('click', function(){
  contactdiv.style.display = 'block';
  homediv.style.display = 'none';
  gamesdiv.style.display = 'none';
});

home.addEventListener('click', function(){
  contactdiv.style.display = 'none';
  homediv.style.display = 'block';
  gamesdiv.style.display = 'none';
});