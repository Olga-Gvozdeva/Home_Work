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

function basket(){
        let alzir = document.querySelectorAll('.click');
        let basket = document.querySelector('.basket');
        let isResizeble = false;
        
        if(!isResizeble) {
        for(let i = 0; i < alzir.length; i++){
            let sossa = alzir[i];
            sossa.addEventListener('click', function(){
    
            basket.classList.toggle('basketClick');

            isResizeble = true;
    
            }
        )};
    }
}

let gamma = [];

function gataka(){


  for(i in localStorage) {

    if((i.slice(0,3)) == ('art')){
    
        let l = localStorage[i].split(',');
        let obj = {
            art: i.slice(5),
            name: l[0],
            price: parseInt(l[1]),
            quantity: 1
        }
        gamma.push(obj);
    };
    
    }
    
}

function writeTable() {
    if (!gamma.length) {
        $('.table, .form').remove();
        $('.nullBasket').after('<div class="empty">Add items to Сart</div>');
        return;
    }
    
    let tab = $('.table');
    let hlpstr = '<div class="tr top"><div class="id"></div><div class="name">Product Name</div><div class="price">Price</div><div class="quantity">Quantity</div><div class="summa">Total</div><div class="delete"></div></div>';
    let sum = 0;
    for (item of gamma) {
        sum += (item.quantity * item.price);
        hlpstr += '<div class="tr"><div class="id" id="tovar_' + item.art + '"></div><div class="name">' + item.name + '</div><div class="price">' + item.price + '</div><div class="quantity"><button type="button">&minus;</button><span class="number">' + item.quantity + '</span><button type="button">&plus;</button></div><div class="summa">' + (item.quantity * item.price) + '</div><div class="delete"><button type="button">&times;</button></div></div>';
    }
    hlpstr += '<div class="tr bottom"><div class="text">Итого:</div><div class="itog">' + sum + '</div></div>';
    tab.html(hlpstr);
}

function removeTovar(id) {
    for (let i = 0; i < gamma.length; i++) {
        if (gamma[i].art == id) {
            gamma.splice(i, 1);
            
                let key = localStorage.key(i);
                localStorage.removeItem(key);
            
            return true;
        }
    }
    return false;
}

/*

function formValidate(form) {
    let name = $('#name').val();
    if (!name) {
        alert('Не заполнено имя!');
        return false;
    }
    let phone = $('#phone').val();
    if (!phone.match(/^((\+7)|(8))?\s?\(?\d{3}\)?\s?\d{3}\-?\d{2}\-?\d{2}$/)) {
        alert('Не заполнен номер телефона!');
        return false;
    }
    let mail = $('#mail').val();
    if (!mail.match(/^.+@.+\..+$/)) {
        alert('Не заполнен адрес почты!');
        return false;
    }
    let date = $('#date').val();
    if (!date.match(/^\d{2}\-\d{2}\-\d{4}$/)) {
        alert('Не выбрана дата!');
        return false;
    }
    let comment = $('#comment').val();
    let formData = {
        name,
        phone,
        mail,
        date,
        comment
    }
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: formData,
        method: 'POST',
        success: function(response) {
            makeAlert(response);
        }
    });
}

//ooooooooooooooooooooooooooooooooooooooooo

function makeAlert(response) {
    let hlpstr = '<div class="alertbox"><button type="button">&times;</button><p>Ваш заказ оформлен под номером ' + response.id + '.</p></div>';
    $('body').append('<div class="screen"></div>');
    $('body').append(hlpstr);
    $('.alertbox button, .screen').click(function(){
        $('.alertbox').animate({opacity:0}, 500, function(){
            location.reload(true);
        });
    });
    $('.alertbox').animate({opacity:1}, 500);
}

//oooooooooooooooooooooooooooooooooooooooooooooooooooo

function makeCalendar(fieldDate) {
    let hlpdate = new Date();
    let curyear, curmonth, curday;
    if (fieldDate.match(/^\d{2}\-\d{2}\-\d{4}$/)) {
        [curday, curmonth, curyear] = fieldDate.split('-');
        curmonth--;
        hlpdate = new Date(curyear, curmonth, curday);
    }
    curyear = hlpdate.getFullYear();
    curmonth = hlpdate.getMonth();
    curday = hlpdate.getDate();

    /*
    if (fieldDate.match(/^\d{2}\-\d{2}\-\d{4}$/)) {
        [curday, curmonth, curyear] = fieldDate.split('-');
        curmonth--;
        if ((curday < 1) || (curmonth < 0) || (curyear < 2020) || (curmonth > 11) || (curyear > 2023) || (curday > 31) || ((curmonth in [3, 5, 8, 10]) && (curday > 30)) || ((curmonth == 1) && ((curyear % 400 == 0) || ((curyear % 4 == 0) && (curyear % 100 != 0))) && (curday > 29)) || ((curmonth == 1) && (curday > 28))) {
            curyear = now.getFullYear();
            curmonth = now.getMonth();
            curday = now.getDate();
        }
    }
    
   
    hlpdate = new Date(curyear, curmonth);
    let prevdays = ((hlpdate.getDay() + 6) % 7); // пн - 0, вт - 1 ... сб - 5, вс - 6
    hlpdate = new Date(curyear, curmonth + 1, 0);
    let lastday = hlpdate.getDate() + prevdays; // последний день месяца + дни до начала месяца
    let weeks = Math.ceil(lastday / 7);
    let hlpstr = '<div class="dp_header"><span class="bigprev"><<</span><span class="prev"><</span><strong>' + russMonth[curmonth] + ' ' + curyear + '</strong><span class="next">></span><span class="bignext">>></span></div>';
    hlpstr += '<div class="dp_grid"><span class="headday">Пн</span><span class="headday">Вт</span><span class="headday">Ср</span><span class="headday">Чт</span><span class="headday">Пт</span><span class="headday holiday">Сб</span><span class="headday holiday">Вс</span>';
    for (let i = 0; i < weeks * 7; i++) {
        if ((i >= prevdays) && (i < lastday)) {
            let getdate = addChar(i - prevdays + 1) + '-' + addChar(curmonth + 1) + '-' + curyear;
            hlpstr += '<span class="getter';
            if ((i % 7 == 5) || (i % 7 == 6)) hlpstr += ' holiday';
            hlpstr += '" data-get="' + getdate + '">' + (i - prevdays + 1) + '</span>';
        } else {
            hlpstr += '<span class="empty"></span>';
        }
    }
    hlpstr += '</div>';
    $('#calendar').html(hlpstr);
    $('#calendar .prev').click(function(){
        makeCalendar(`01-${addChar(curmonth)}-${curyear}`);
    })
    $('#calendar .next').click(function(){
        makeCalendar(`01-${addChar(curmonth + 2)}-${curyear}`);
    })
    $('#calendar .bigprev').click(function(){
        makeCalendar(`01-${addChar(curmonth + 1)}-${curyear - 1}`);
    })
    $('#calendar .bignext').click(function(){
        makeCalendar(`01-${addChar(curmonth + 1)}-${curyear + 1}`);
    })
    $('#calendar .getter').click(function(){
        $('#date').val(this.dataset.get);
        $('.calendarbox').animate({opacity:0}, 500, function(){
            $('.calendarbox').remove();
            $('.screen').remove();
        });
    });
}

function getCalendar(fieldDate) {
    if ($('.calendarbox').length) return;
    $('body').append('<div class="screen"></div>');
    $('body').append('<div class="calendarbox"><div id="calendar"></div></div>');
    $('.screen').click(function(){
        $('.calendarbox').animate({opacity:0}, 500, function(){
            $('.calendarbox').remove();
            $('.screen').remove();
        });
    });
    makeCalendar(fieldDate);
    $('.calendarbox').animate({opacity:1}, 500);
}

/*

*/
