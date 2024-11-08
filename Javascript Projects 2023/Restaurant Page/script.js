let sharingBucketsText = document.getElementById("sharingbuckets");
let sharingBucketsText2 = document.getElementById("sharingbuckets2");
let boxMealsText = document.getElementById("boxmeals");
let boxMealsText2 = document.getElementById("boxmeals2");
let burgersText = document.getElementById("burgers");
let burgersText2 = document.getElementById("burgers2");
let bucketsForOneText = document.getElementById("bucketsforone");
let bucketsForOneText2 = document.getElementById("bucketsforone2");
let menuArray = [sharingBucketsText,sharingBucketsText2, boxMealsText,boxMealsText2, burgersText,burgersText2, bucketsForOneText, bucketsForOneText2];

document.getElementById("sharingbucketsbutton").addEventListener('click', function(){

  const Filter = () => {
    menuArray[0].style.display = 'block';
    menuArray[1].style.display = 'block';
    menuArray[2].style.display = 'none';
    menuArray[3].style.display = 'none';
    menuArray[4].style.display = 'none';
    menuArray[5].style.display = 'none';
    menuArray[6].style.display = 'none';
    menuArray[7].style.display = 'none';
  }
  
  Filter();
})

document.getElementById("boxmealsbutton").addEventListener('click', function(){

  const Filter = () => {
    menuArray[0].style.display = 'none';
    menuArray[1].style.display = 'none';
    menuArray[2].style.display = 'block';
    menuArray[3].style.display = 'block';
    menuArray[4].style.display = 'none';
    menuArray[5].style.display = 'none';
    menuArray[6].style.display = 'none';
    menuArray[7].style.display = 'none';

  }
  Filter()
})

document.getElementById("burgersbutton").addEventListener('click', function(){

  const Filter = () => {
    menuArray[0].style.display = 'none';
    menuArray[1].style.display = 'none';
    menuArray[2].style.display = 'none';
    menuArray[3].style.display = 'none';
    menuArray[4].style.display = 'block';
    menuArray[5].style.display = 'block';
    menuArray[6].style.display = 'none';
    menuArray[7].style.display = 'none';

  }
  Filter();
})

document.getElementById("bucketsforonebutton").addEventListener('click', function(){

  const Filter = () => {
    menuArray[0].style.display = 'none';
    menuArray[1].style.display = 'none';
    menuArray[2].style.display = 'none';
    menuArray[3].style.display = 'none';
    menuArray[4].style.display = 'none';
    menuArray[5].style.display = 'none';
    menuArray[6].style.display = 'block';
    menuArray[7].style.display = 'block';

  }
  Filter()
})

document.getElementById("all").addEventListener('click', function(){

  const Filter = () => {
    menuArray[0].style.display = 'block';
    menuArray[1].style.display = 'block';
    menuArray[2].style.display = 'block';
    menuArray[3].style.display = 'block';
    menuArray[4].style.display = 'block';
    menuArray[5].style.display = 'block';
    menuArray[6].style.display = 'block';
    menuArray[7].style.display = 'block';

  }
  Filter()
})

