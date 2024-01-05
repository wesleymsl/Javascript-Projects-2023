let card1 = document.getElementById('pair1');
let card2 = document.getElementById('pair2');
let card3 = document.getElementById('pair3');
let card4 = document.getElementById('pair4');
let clicked1 = false;
let clicked2 = false;
let clicked3 = false;
let clicked4 = false;
let paired1 = false;
let paired2 = false;
let wordArray = ['beans', 'toast', 'beans', 'toast'];
card1.textContent = wordArray[0];
card2.textContent = wordArray[3];
card3.textContent = wordArray[2];
card4.textContent = wordArray[1];

card1.addEventListener('click', function(){
  card1.style.color = 'black';
  clicked1 = true;
})

card2.addEventListener('click', function(){
  card2.style.color = 'black'
  clicked2 = true;
})

card3.addEventListener('click', function(){
  card3.style.color = 'black'
  clicked3 = true;
})

if(clicked1 == true && clicked3 == true){
  paired1 = true;
  card1.style.display = 'none';
  card3.style.display = 'none';
}

if(clicked2 && clicked4){
  paired2 = true;
  card2.style.display = 'none';
  card4.style.display = 'none';
}

if(paired1 && paired2){
  document.getElementById('winner').textContent = 'You Win';
}