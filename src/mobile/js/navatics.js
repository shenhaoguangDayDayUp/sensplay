// 动画初始化
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset:200,
        mobile: false,
        live: true
    });
    wow.init();

    $('body').on("touchstart", function(e) {
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

    });

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


$(".play-btn").on("click", function(e) {

     $('.video-box').show();
})