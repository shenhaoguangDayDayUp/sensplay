/*
* @Author: Marte
* @Date:   2018-12-18 10:28:59
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-19 18:13:07
*/

'use strict';


/*
二级栏目展开
 */

$('.manu').click(function(){
    $('.menu-category').show();
})

/*点击关闭按钮

 */
$('.menu-category').find('.close-btn').click(function(){
    $('.menu-category').hide();
    $('.navbr-group-menu').css('left',"100%");

})


/*
    图片懒加载
 */
$(function() {
  $("img.lazy").lazyload({effect: "fadeIn"});
});