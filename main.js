$('.section1').on('click', function (){
    $('.sec1txt').toggleClass('sec1txt-active');
    $('.sec2txt').removeClass('sec2txt-active');
    $('.sec3txt').removeClass('sec3txt-active');

});

$('.section2').on('click', function (){
    $('.sec2txt').toggleClass('sec2txt-active');
    $('.sec1txt').removeClass('sec1txt-active');
    $('.sec3txt').removeClass('sec3txt-active');

});

$('.section3').on('click', function (){
    $('.sec3txt').toggleClass('sec3txt-active');
    $('.sec1txt').removeClass('sec1txt-active');
    $('.sec2txt').removeClass('sec2txt-active');

});