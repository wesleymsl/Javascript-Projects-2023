let decreaseButton = document.getElementById("decreaseButton");
let increaseButton = document.getElementById("increaseButton");
let temperature = document.getElementById("temperature");
temperature.innerHTML = 0;

decreaseButton.addEventListener("click", function(){
  temperature.innerHTML--;
  if(temperature.innerHTML> 0){
    document.body.style.backgroundColor = 'blue';
  };
});

increaseButton.addEventListener("click", function(){
  temperature.innerHTML++;
  if(temperature.innerHTML> 30){
    document.body.style.backgroundColor = 'red'
  };
});

