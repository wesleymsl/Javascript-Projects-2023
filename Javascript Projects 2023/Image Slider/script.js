let previous = document.getElementById('previous');
let next = document.getElementById('next');
let mcdonaldslogo = document.getElementById('mcdonaldslogo');
let kfclogo = document.getElementById('kfclogo');
let wendyslogo = document.getElementById('wendyslogo');
let burgerkinglogo = document.getElementById('burgerkinglogo');
mcdonaldslogo.style.display = 'none';
kfclogo.style.display = 'none';
wendyslogo.style.display = 'none';
burgerkinglogo.style.display = 'none';
let logoArray = [mcdonaldslogo, kfclogo, wendyslogo, burgerkinglogo];
let i = 0;
let y = 1;
logoArray[i].style.display = 'block';
logoArray[y].style.display = 'none';

next.addEventListener('click', function(){
  i = i + 1;
  y = i - 1;
  if(i > logoArray.length - 1){
    i = 0;
    y = logoArray.length -1;
  }
  logoArray[i].style.display = 'block';
  logoArray[y].style.display = 'none';
})

previous.addEventListener('click', function(){
  i = i -1;
  y = i + 1;
  if(i < 0){
    i = logoArray.length -1;
    y = 0;
  }
  logoArray[i].style.display = 'block';
  logoArray[y].style.display = 'none';
});


