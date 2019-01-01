// 动画初始化
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset:200,
        mobile: false,
        live: true
    });
    wow.init();

    $("body").on("touchstart", function(e) {
        // e.preventDefault();
        startX = e.originalEvent.changedTouches[0].pageX,
        startY = e.originalEvent.changedTouches[0].pageY;
    });
    $("body").on("touchmove", function(e) {
        var sc=$(document);//得到document文档对象。
        var win=$(window); //得到窗口对象
        var nav_bar_top=$('.nav-bar').offset().top;
        var doc_top=sc.scrollTop();
        console.log(nav_bar_top);
        console.log(doc_top);
        // e.preventDefault();
        moveEndX = e.originalEvent.changedTouches[0].pageX,
        moveEndY = e.originalEvent.changedTouches[0].pageY,
        X = moveEndX - startX,
        Y = moveEndY - startY;
        // 判断文档卷起来的高度  来固定nav-bar
        if(doc_top>nav_bar_top){
            $('.nav-bar').addClass('fix-nav-bar');

        }else{
            $('.nav-bar').removeClass('fix-nav-bar');
        }
        if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
            $('#wb_tabs').css('background',"#fff");
            $('.logo').find('img.logoimg').attr("src","../../dist/images/home-color.png");
        }
        else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
            $('#wb_tabs').css('background',"#fff");
            $('.logo').find('img.logoimg').attr("src","../../dist/images/home-color.png");
        }

    });

// 菜单的点击
//实现滚动条无法滚动
    var mo=function(e){e.preventDefault();};

    /***禁止滑动***/
    function stop(){
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
    }

    /***取消滑动限制***/
    function move(){
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",mo,false);
    }


$('.manu').click(function(){
    $('#wb_tabs').css('background',"#fff");
    // $('#wb_tabs').find('.manu').attr("src","img/menu-home-black.png");
    $('.logo').find('img.logoimg').attr("src","../../dist/images/home-color.png");

    // $('.navbar-content').css('visibility','visible');
    $('.navbar-content').show();
    // $('.navbar-content').find('img.fhimg').css("display","block");
    // 关闭按钮
    $('.navbar-header').find('img.close').show();
    $('.navbar-header').find('img.manu').hide();



})

// 点击关闭按钮
$('.navbar-header').find('img.close').click(function(){
    $('.navbar-header').find('img.close').hide();
    $('.navbar-header').find('img.manu').show();
    $('.navbar-content').hide();
    $('.navbr-group-menu').css('left',"100%");

    // $('.navbar-header').find('img.manu').attr("src","img/menu-home-black.png");
})


function stop(){
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
}

// 点击二级菜单侧滑分类
$('.navbar-group').find('a.link').click(function(){


    $(this).addClass('.navbar-group-active').siblings('li').removeClass('.navbar-group-active');
    if($(this).siblings('div').css('left')==0){
        $(this).siblings('div').css('left',"100%");


    }else{
        $(this).siblings('div').css('left',"0");
        // $('.navbar-header').find('img.manu').show();

        // $('.navbar-header').find('img.manu').attr("src","img/menu-home-back-black.png");

    }
})

// 图片懒加载
$(function() {
  $("img.lazy").lazyload({effect: "fadeIn"});
});
//点击视频播放按键
// $('.play-btn').click(function(){
//     $('.video-box').show();
// })
//点击除了视频之外的地方  视频消失
$(document).click(function(e){
    var _con = $('.play-btn');
    if(!_con.is(e.target) && _con.has(e.target).length === 0){
        $('video').css('display','none');
    }
})


$(".play-btn").on("touchmove", function(e) {
     $('.video-box').show();
})