$(function(){
    AOS.init();

    $(".main-visual").vegas({ //使いたいところ。クラス名
        ovarlay: false,
        transition:'blur',
        transitionDuration: 2000,
        delay: 10000,
        animation:'kenburns',
        animationDuration: 10000,
    slides: [
        { src: "./img/photo01.jpg" },
        { src: "./img/photo011.jpg" },
        { src: "./img/photo012.jpg" },
    ]
    });

    $(document).ready(function() {
        $('.drawer').drawer();
      });
})