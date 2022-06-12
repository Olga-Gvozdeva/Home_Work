if ($('.catmenu').length) {
    $('.catmenu .opener').click(function(){
        $('.catmenu').toggleClass('open')
    });
    $('.accordeon .sub').click(function(){
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
        } else {
            $('.accordeon .sub.open').removeClass('open');
            $(this).addClass('open');
        }
    });
    $('.accordeon .sub > a').click(function(e){
        e.stopPropagation();
    });
}