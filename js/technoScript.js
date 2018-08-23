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

    /*Валидация формы*/
    let $form = $('.formColl');
    let inp = $('.formColl > input');
    let patterns = {
        name: /^[a-zA-Zа-яА-Я0-9]+$/,
        tell: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
    };

    $form.on('submit', function (e) {

        let err = false;

        for(let i = 0; i < inp.length; i++){
            let val = inp.eq(i).val().trim();
            let validation = inp.eq(i).attr('data-validation');
            let pattern = (validation in patterns ) ? patterns[validation] : /.*/;

            if(pattern.test(val)){
                inp.eq(i).removeClass('err');
            }
            else {
                inp.eq(i).addClass('err');
                err = true;
            }
        }

        if (err){
            e.preventDefault();
        }



    }); // submit


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

