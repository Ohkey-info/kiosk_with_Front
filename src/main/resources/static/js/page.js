$(document).ready(function(){
    $('.notice>div:nth-child(2)>span').click(function(){
        $('.event_show').toggleClass('event_active');
        $('.notice div:nth-child(2)>.material-icons').toggleClass('active');
    })
    menu_choice_active();
});


function menu_choice_active(){
    $('.menu_page ol li:nth-child(n+2)').on('click',function(){
        $('.menu_page ol li:nth-child(1)').removeClass('active');
        $(this).toggleClass('active');
        $('.menu_page .picture>div').css('display','none');
        $('.menu_page .information>div').css('display','none');

        var choice_li = $('.menu_page ol li.active');
        var choice_arr = [];
        for(i = 0; i<choice_li.length;i++){
            var choice_data = $('.menu_page ol li.active').eq(i).attr('data-choice');
            choice_arr.push(choice_data);
        }
        for(i = 0; i<choice_li.length;i++){
            $('.menu_page .picture').children('.'+choice_arr[i]).css('display','block');
            $('.menu_page .information').children('.'+choice_arr[i]).css('display','block');
        }
    })
    $('.menu_page ol li:nth-child(1)').on('click',function(){
        if($('.menu_page ol li:nth-child(1)').hasClass('active') == false){
            $('.menu_page ol li').removeClass('active');
            $(this).addClass('active');
            $('.menu_page .picture div').css('display','block');
            $('.menu_page .picture').css('display','block');
            $('.menu_page .information div').css('display','block');
        }else{
            $(this).toggleClass('active');
            $('.menu_page .picture div').css('display','none');
            $('.menu_page .information div').css('display','none');
        }

        if($('.menu_page .picture_choice li:nth-child(1)').hasClass('active')){
            $('.menu_page .picture div').css('display','block');
            $('.menu_page ol li:not(:nth-child(1))').removeClass('active');
        }

        if($('.menu_page .information_choice li:nth-child(1)').hasClass('active')){
            $('.menu_page .information div').css('display','block');
            $('.menu_page ol li:not(:nth-child(1))').removeClass('active');
        }
    });


    $('.list_choice ul li').on('click',function(){
        $('.menu_page ol li').removeClass('active');
        $('.menu_page ol li:nth-child(1)').addClass('active');
        $('.list_choice ul li').removeClass('active');
        $(this).addClass('active');
        if($('.list_choice ul li').eq(0).hasClass('active')){
            $('section.information').css('display','none');
            $('section.picture').css('display','block');
            $('section.picture>div').css('display','block');
            $('ol.picture_choice').css('display','block');
            $('ol.information_choice').css('display','none');
        }else if($('.list_choice ul li').eq(1).hasClass('active')){
            $('section.picture').css('display','none');
            $('section.information').css('display','block');
            $('section.information>div').css('display','block');
            $('ol.picture_choice').css('display','none');
            $('ol.information_choice').css('display','block');
        }
    })
    
    if($.cookie('cookie_menu') === undefined){
        $('.menu_page ol li:nth-child(1)').addClass('active');
    }else{
        $('.menu_page ol li[data-choice='+ $.cookie('cookie_menu') +']').addClass('active');
        $('section.picture>div').css('display','none');
        $('.menu_page .picture').children('.'+$.cookie('cookie_menu')).css('display','block');
    }

    $.removeCookie('cookie_menu');
}


/*냅두기*/
function event_active(){
}


function notice_Rolling(){
}

function notice_page_control(){
}

function questions_active(){ 
}

function page_control_btn(){
};

function event_Time_img01(){
}

function event_Time_img02(){
}

function event_Time_img03(){
}

function scroll_transform(){
}