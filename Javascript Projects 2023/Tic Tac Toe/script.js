let one = document.getElementById("one");
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let pickArray = [one,two,three,four,five,six,seven,eight,nine];
let compCross = 'X';
let userNoughts = 'O';

function CompChoice(){
  let validPickArray = [];
  for(let i = 0; i < pickArray.length){
    if(pickArray[i].textContent != compCross && pickArray[i].textContent != userNoughts){
      validPickArray.push(pickArray[i]);
    }
  }
  let compPick = validPickArray[Math.floor(Math.random() * validPickArray.length - 1)]
  compPick.textContent = compCross;
}

function UserPick(pick){
  pick.textContent = userNoughts;
  PlayerWinCheck();
  CompChoice();
  CompWinCheck();
}

pickArray[0].addEventListener('click', function(){
  UserPick(pickArray[0]);
}) 
pickArray[1].addEventListener('click', function(){
  UserPick(pickArray[1])
})
pickArray[2].addEventListener('click', function(){
  UserPick(pickArray[2])
})
pickArray[3].addEventListener('click', function(){
  UserPick(pickArray[3])
})
pickArray[4].addEventListener('click', function(){
  UserPick(pickArray[4])
})
pickArray[5].addEventListener('click', function(){
  UserPick(pickArray[5])
})
pickArray[6].addEventListener('click', function(){
  UserPick(pickArray[6])
})
pickArray[7].addEventListener('click', function(){
  UserPick(pickArray[7])
})
pickArray[8].addEventListener('click', function(){
  UserPick(pickArray[8])
})

// Checks if the computer is the winner
function CompWinCheck(){
  if(one.textContent == compCross && two.textContent == compCross && three.textContent == compCross){
    alert("Computer Wins")
  } else if(one.textContent == compCross && four.textContent == compCross && seven.textContent == compCross){
    alert('Computer Wins')
  } else if(one.textContent == compCross && five.textContent == compCross && nine.textContent == compCross){
    alert('Computer Wins')
  } else if(four.textContent == compCross && five.textContent == compCross && six.textContent == compCross){
    alert('Computer Wins')
  } else if(seven.textContent == compCross && eight.textContent == compCross && nine.textContent == compCross){
    alert('Computer Wins')
  } else if(seven.textContent == compCross && five.textContent == compCross && three.textContent == compCross){
    alert('Computer Wins')
  } else if(two.textContent == compCross && five.textContent == compCross && eight.textContent == compCross){
    alert('Computer Wins')
  } else if(three.textContent == compCross && six.textContent == compCross && nine.textContent == compCross){
    alert('Computer Wins')
  }
}
// Checks if the player is the winner
function PlayerWinCheck(){
  if (one.textContent == userNoughts && two.textContent == userNoughts && three.textContent == userNoughts) {
    alert("You Win");
  } else if (one.textContent == userNoughts && four.textContent == userNoughts && seven.textContent == userNoughts) {
    alert('You Win');
  } else if (one.textContent == userNoughts && five.textContent == userNoughts && nine.textContent == userNoughts) {
    alert('You Win');
  } else if (four.textContent == userNoughts && five.textContent == userNoughts && six.textContent == userNoughts) {
    alert('You Win');
  } else if (seven.textContent == userNoughts && eight.textContent == userNoughts && nine.textContent == userNoughts) {
    alert('You Win');
  } else if (seven.textContent == userNoughts && five.textContent == userNoughts && three.textContent == userNoughts) {
    alert('You Win');
  } else if (two.textContent == userNoughts && five.textContent == userNoughts && eight.textContent == userNoughts) {
    alert('You Win');
  } else if (three.textContent == userNoughts && six.textContent == userNoughts && nine.textContent == userNoughts) {
    alert('You Win');
  }
}



