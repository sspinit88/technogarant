/*
       <script src="js/technoScript.js"></script>
 */

$(document).ready(function () {
    /*Заказать звонок*/
        $('#open_window').click(function (e){
            e.preventDefault();
            $('.headerColl, .overlay').css({'opacity':'1', 'visibility':'visible'}).fadeIn(700);
            $('html, body').animate({
                    scrollTop: $('.headerColl').offset().top - 20
                },1000);
        });
        $('.collClose').click(function (){
            $('.headerColl, .overlay').fadeOut(300);
            $('html, body').animate({
                scrollTop: $('.header').offset().top - 50
            },1000);
        });
    /*Слайдер*/
    $('.mainSlider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1700,
        fade: true,
        zIndex: 10,
        arrows: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

}); // $(document).ready

