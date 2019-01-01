/*
* @Author: Marte
* @Date:   2018-12-17 15:45:49
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-29 11:24:43
*/

'use strict';
// $("body").on("touchstart", function(e) {
//         /* e.preventDefault();*/
//         startX = e.originalEvent.changedTouches[0].pageX,
//         startY = e.originalEvent.changedTouches[0].pageY;
//     });
    // $("body").on("touchmove", function(e) {
    //     var sc=$(document);//得到document文档对象。
    //     var win=$(window); //得到窗口对象
    //     var nav_bar_top=$('.nav-bar').offset().top;
    //     var doc_top=sc.scrollTop();
    //     e.preventDefault();
    //     moveEndX = e.originalEvent.changedTouches[0].pageX,
    //     moveEndY = e.originalEvent.changedTouches[0].pageY,
    //     X = moveEndX - startX,
    //     Y = moveEndY - startY;
    //     // 判断文档卷起来的高度  来固定nav-bar
    //     if(doc_top>nav_bar_top){
    //         $('.nav-bar').addClass('fix-nav-bar');

    //     }else{
    //         $('.nav-bar').removeClass('fix-nav-bar');
    //     }
    //     if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
    //     }
    //     else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
    //     }
    // });

/*菜单的点击
实现滚动条无法滚动*/
    // var mo=function(e){e.preventDefault();};

    // /***禁止滑动***/
    // function stop(){
    //     document.body.style.overflow='hidden';
    //     document.addEventListener("touchmove",mo,false);//禁止页面滑动
    // }

    // /***取消滑动限制***/
    // function move(){
    //     document.body.style.overflow='';//出现滚动条
    //     document.removeEventListener("touchmove",mo,false);
    // }

function stop(){
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
}

/*点击视频播放按键
     $('.play-btn').click(function(){
         $('.video-box').show();
     })*/
/*
点击除了视频之外的地方  视频消失
 */
$(document).click(function(e){
    var _con = $('.play-btn');
    if(!_con.is(e.target) && _con.has(e.target).length === 0){
        $('video').css('display','none');
    }
})


$(".play-btn").on("touchmove", function(e) {
     $('.video-box').show();
})

/*
配件轮播
 */
var swiper = new Swiper('.swiper-containerd', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: 2000,//可选选项，自动滑动
    loop : true,
});
var swiper = new Swiper('.guidebox', {
    loop : true,
    // pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true

});


/*
小车颜色切换
 */
$('.red-color').click(function(){
    $('.car-box').find('.red-car').show().siblings('img').hide();
})
$('.green-color').click(function(){
    $('.car-box').find('.green-car').show().siblings('img').hide();
})
$('.black-color').click(function(){
    $('.car-box').find('.black-car').show().siblings('img').hide();
})