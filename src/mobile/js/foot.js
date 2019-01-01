/*
* @Author: Marte
* @Date:   2018-12-17 15:40:14
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-17 15:40:27
*/

'use strict';

 $(".nav-box").on("click",function () {
    $('.about-info').stop();
    if($(this).attr("id")=="open"){
        $(this).removeAttr("id").siblings(".about-info").slideUp();
    }else{
        $(this).attr("id","open").next().slideDown().siblings(".about-info").slideUp();
    }
});