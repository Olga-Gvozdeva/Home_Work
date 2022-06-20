$(function(){

accordeon();
popUpOpen();
dropmenuClick();
displaySize();
hiperion();

//slidebar('.previous','.next','.item');
//slidebar('.previous2','.next2','.item2');

basket();

});


$('.item').click(function(){
    if ($(this).data('href')) location.assign($(this).data('href'));
})

if ($('.product').length) {
    $('.mini .rail').css({width: $('.mini .rail img').length * 60 - 10});
    
    $('.bigimage img').click(function(){
        lightbox(this);
    });
    
    $('.gal_left').click(function(){
        if (!$(this).hasClass('disabled')) galSlide('left');
    });
    $('.gal_right').click(function(){
        if (!$(this).hasClass('disabled')) galSlide('right');
    });
    
    $('.rail img').click(function(){
        let attr = $(this).attr('src').split('/');
        attr = attr[0] + '/' + attr[1].split('_')[1];
        $('.bigimage img').attr('src', attr);
    });
}

if ($('.table').length) {
    getCurrency1();
    getCurrency2();
    getCurrency3();
    writeTable();
    $(document).on('click', '.quantity button:first-child', function(){
        let id = $(this).parents('.tr').find('.id').prop('id').slice(6);
        for (item of tovardata) {
            if (item.id == id) {
                item.qty--;
                if (item.qty <= 0) removeTovar(id);
                break;
            }
        }
        writeTable();
    });
    $(document).on('click', '.quantity button:last-child', function(){
        let id = $(this).parents('.tr').find('.id').prop('id').slice(6);
        for (item of tovardata) {
            if (item.id == id) {
                item.qty++;
                break;
            }
        }
        writeTable();
    });
    $(document).on('click', '.delete button', function(){
        let id = $(this).parents('.tr').find('.id').prop('id').slice(6);
        if (removeTovar(id)) writeTable();
    });
    $('.form form').submit(function(e){
        e.preventDefault();
        formValidate(this);
    });
    $('#date').focus(function(){
        getCalendar($('#date').val());
    });
}