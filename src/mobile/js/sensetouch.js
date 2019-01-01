 $('.items').click(function(){
    $(this).addClass('oprbtn-active');
    $(this).siblings().removeClass('oprbtn-active');
})


/*
操作动画
 */
$('.item-left').click(function(){
    // $('.video-boxx').find('.left-video').show().delay(3000).hide(0).siblings('video').hide();
    $('.video-boxx').find('.left-video').show().siblings('video').hide();
      // $('.operate-race').delay(3000).show(0);
})
$('.item-right').click(function(){
    $('.video-boxx').find('.right-video').show().siblings('video').hide();
    // $('.video-boxx').find('.right-video').show().delay(3000).hide(0).siblings('video').hide();
})
$('.item-up').click(function(){
    $('.video-boxx').find('.up-video').show().siblings('video').hide();
    // $('.video-boxx').find('.up-video').show().delay(3000).hide(0).siblings('video').hide();
})
$('.item-back').click(function(){
    $('.video-boxx').find('.back-video').show().siblings('video').hide();
    // $('.video-boxx').find('.back-video').show().delay(3000).hide(0).siblings('video').hide();

})
$('.item-down').click(function(){
    $('.video-boxx').find('.down-video').show().siblings('video').hide();
    // $('.video-boxx').find('.down-video').show().delay(3000).hide(0).siblings('video').hide();
})