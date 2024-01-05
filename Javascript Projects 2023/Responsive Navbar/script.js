let navbar = document.querySelector('.navbar');
let navbarButton = document.getElementById('navbarButton');

navbarButton.addEventListener('click', function(){
  if(navbar.style.display == 'none'){
    navbar.style.display = 'block';
    navbarButton.textContent = 'Hide Navbar';
  } else {
    navbar.style.display = 'none';
    navbarButton.textContent = 'Show Navbar'
  }
});