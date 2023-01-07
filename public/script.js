const openbtn = document.querySelector('#open_nav_btn');
const nav_items = document.querySelector('.nav_items');





openbtn.addEventListener('click',function(){

    nav_items.classList.toggle("active");


})

