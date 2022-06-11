'use strict'

let button = document.querySelector('.logo');
let elem = document.querySelector('.dropdownMenu');
button.addEventListener('click', function() {
    elem.classList.toggle('active');
});


let parent = document.querySelector('.right_menu');
let home = document.querySelector('.home');
let products = document.querySelector('.products');
let store = document.querySelector('.store');
let before = document.querySelector('.before');

let dropdownMenu = document.querySelector('.dropdownMenu');

let cloneHome = home.cloneNode(true);
cloneHome.innerHTML = 'Home';

let cloneProducts = products.cloneNode(true);
cloneProducts.innerHTML = 'Products';

let cloneStore = store.cloneNode(true);
cloneStore.innerHTML = 'Store';

window.addEventListener('resize', displaySize);

function displaySize(){
    let width = document.documentElement.clientWidth;
    console.log(width);
    if(width < 760){
        dropdownMenu.insertBefore(cloneHome, before);
        dropdownMenu.insertBefore(cloneProducts, before);
        dropdownMenu.insertBefore(cloneStore, before);
    }else{
        cloneHome.remove();
        cloneProducts.remove();
        cloneStore.remove();
    }
}

displaySize();
   
