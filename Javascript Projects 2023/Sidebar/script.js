let sidebarDiv = document.getElementById('sidebardiv');
let hideShowToggle = document.getElementById('show-hide-toggle');

hideShowToggle.addEventListener('click', function(){
  sidebarDiv.classList.toggle('visibility')
})