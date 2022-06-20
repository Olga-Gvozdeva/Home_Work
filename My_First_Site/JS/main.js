'use strict'


function dropmenuClick(){
let button = document.querySelector('.logo');
let elem = document.querySelector('.dropdownMenu');
button.addEventListener('click', function() {
elem.classList.toggle('active');
});
}

function displaySize(){

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


let width = window.innerWidth;


let minResize = false;
let maxResize = false;

let f_windowWidth = function (width) {

          if (width <= 760 && !minResize) {
              minResize = true;   
              maxResize = false;
              dropdownMenu.insertBefore(cloneHome, before);
              dropdownMenu.insertBefore(cloneProducts, before);
              dropdownMenu.insertBefore(cloneStore, before);
          } 

          if (width >= 760 && !maxResize) {
              maxResize = true;
              minResize = false;
              cloneHome.remove();
              cloneProducts.remove();
              cloneStore.remove();
          }
    };
        
    f_windowWidth(width);
    $(window).on("resize", function () {
        let width = window.innerWidth;
        f_windowWidth(width); 
    });

};


function popUpOpen(){
    let persons = document.querySelector('.person');
    let popupFade = document.querySelector('.popupFade');

    persons.addEventListener('click', function(){
        popupFade.classList.toggle('fadeOpen')
    });

    let closepopUp = document.querySelector('.popupClose');
    closepopUp.addEventListener('click', function(){
        popupFade.classList.remove('fadeOpen')
    })
}

function accordeon(){
    let beta = document.querySelectorAll('.sub');
    for(let elem of beta){
        elem.firstElementChild.addEventListener('click', function(){
            elem.lastElementChild.classList.toggle('openacc');
        })
    }
    
}

document.addEventListener("DOMContentLoaded", accordeon);
document.addEventListener("DOMContentLoaded", popUpOpen);
document.addEventListener("DOMContentLoaded", dropmenuClick);
document.addEventListener("DOMContentLoaded", displaySize);

function slidebar(perem1, perem2, perem3){

    document.querySelector(perem1).addEventListener("click", previousSlide);
    document.querySelector(perem2).addEventListener("click", nextSlide);

    let slideIndex = 1;
    showSlides(slideIndex);

    function nextSlide() {
        showSlides(slideIndex += 1);
    }
    function previousSlide() {
        showSlides(slideIndex -= 1);  
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.querySelectorAll(perem3);

        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }

        for (let slide of slides) {
            slide.style.display = "none";
        }   
        slides[slideIndex - 1].style.display = "block"; 
    }
}
document.addEventListener("DOMContentLoaded",function(){
    slidebar('.previous','.next','.item');
    slidebar('.previous2','.next2','.item2');
});

function hiperion(){
    let alzir = document.querySelectorAll('.click');
    
    for(let i = 0; i < alzir.length; i++){
        let sossa = alzir[i];
    
        sossa.addEventListener('click', function(){
            let beta = [sossa.dataset.name, sossa.dataset.price];
            let keylocal = sossa.dataset.article;
            localStorage.setItem(keylocal, beta);
    
        })
    
        };
        }

    document.addEventListener("DOMContentLoaded", hiperion)

