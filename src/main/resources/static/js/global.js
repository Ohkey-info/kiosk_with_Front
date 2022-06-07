$(document).ready(function () {
    scroll_top_btn();
    nav_arrow_btn();
    nav_menu_btn();
    footer_arrow_btn();
    nav_menu_active();
    nav_story_active();
});

function scroll_top_btn() {
    $('.top_button').on('click', function () {
        $('html, body').animate({
            scrollTop: '0'
        }, 300);
    });
};

function nav_menu_btn() {
    $('.mobile_icon div span').on('click', function () {
        $('nav').addClass('active');
        $('body').css('overflow', 'hidden');
    });

    $('nav ul>li:nth-child(1) span').on('click', function () {
        $('nav').removeClass('active');
        $('body').css('overflow', 'visible');
    });
};

function nav_arrow_btn() {
    $('nav ul>li>a span').on('click', function (e) {
        if ($(window).width() < 2500) {
            /*navigation 크기 조절*/
            e.preventDefault();
        }
    });

    $('nav ul>li>a span').on('click', function () {
        $(this).parent().next().toggleClass('active');
        $(this).parent().find('span').toggleClass('active');
    });
};

function footer_arrow_btn() {}

function nav_menu_active() {
    $('nav ul li:nth-child(4) ol li').eq(1).click(function () {
        $.cookie('cookie_menu', 'discount');
    });


}

function nav_story_active() {}