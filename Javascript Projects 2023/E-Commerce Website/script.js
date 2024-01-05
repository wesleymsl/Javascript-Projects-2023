let tablePriceAdd = document.getElementById('tablePriceAdd');
let tablePriceReduce = document.getElementById('tablePriceReduce');
let overallPrice = document.getElementById('price');
let chairAdd = document.getElementById('chairAdd');
let chairReduce = document.getElementById('chaireReduce');
let sofaAdd = doument.getElementById('sofaAdd');
let sofaReduce = document.getElementById('sofaReduce');
let price = 0;


tablePriceAdd.addEventListener('click', function(){
  price += 15;
  overallPrice.textContent = price;
});

tablePriceReduce.addEventListener('click', function(){
  price -= 15;
  overallPrice.textContent = price;

});

sofaAdd.addEventListner('click', function(){
  price += 5;
  overallPrice.textContent = price;
})

sofaReduce.addEventListner('click', function(){
  price -= 5;
  overallPrice.textContent = price
})

chairAdd.addEventListner('click', function(){
  price += 10;
  overallPrice.textContent = price;
})

chairReduce.addEventListner('click', function(){
  price -= 10;
  overallPrice.textContent = price;
})

