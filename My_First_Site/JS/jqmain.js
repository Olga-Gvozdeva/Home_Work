$(function(){

accordeon();
dropmenuClick();
displaySize();
gataka();
writeTable();

//slidebar('.previous','.next','.item');
//slidebar('.previous2','.next2','.item2');


if ($('.table').length) {
    writeTable();
    $(document).on('click', '.quantity button:first-child', function(){
        let id = $(this).parents('.tr').find('.id').prop('id').slice(6);
        for (item of gamma) {
            if (item.art == id) {
                item.quantity--;
                if (item.quantity <= 0) removeTovar(id);
                break;
            }
        }
        writeTable();
    });
    $(document).on('click', '.quantity button:last-child', function(){
        let id = $(this).parents('.tr').find('.id').prop('id').slice(6);
        for (item of gamma) {
            if (item.art == id) {
                item.quantity++;
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

$('.item').click(function(){
    lightbox(this);
});

$('.person').click(function(){
    lightboxperson(this);
});

});