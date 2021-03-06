
$(document).ready(function () {

    $('#container').imagesLoaded( function() {
        // images have loaded
        $('.bx-slider').bxSlider({
            // 여기에 옵션 설정
            mode: 'fade',          // 효과설정 vertical- 세로로 이미지변경, horizontal- 가로로 이미지 변경
            auto: true,            // 자동재생
            easing: 'ease-in-out', // 가속도(timing-function), linear
            pause: 3000,           // 정지시간(대기 ex-3초)
            controls: false,       // prew, next 표시/비표시
            pager: true,           // 하단 인디케이터 비표시
            responsive:false,       // 가변 막으려고 false
            autoHover:true          // 마우스 올라가면 정지
        });
    });

    var width = 1115; // 이미지 width값
    var num = 1; // 이미지 번호
    var left = -(width*num)+'px';
    $(function(){
        
        setInterval(function(){
            // 마지막 이미지면 처음으로
            if(num>2) num=0;
            
            // 이미지 번호로 이동(-이미지크기*이미지번호)
            left = -(width*num)+'px';

            console.log(num);
            $('.brand_sliders').css('margin-left',left);
            
            num++;
        },4000);
    });

    // category menu
    // $('#category_btn').click(function () {
    //     $('#category').slideToggle();
    // });
    // 다른곳 누르면 자동으로 닫히기
    $('section').click(function () {
        $('#category') .slideUp();
    });



});



// top btn
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.top_btn').fadeIn();
        } else {
            $('.top_btn').fadeOut();
        }
    });
    
    $(".top_btn").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
});