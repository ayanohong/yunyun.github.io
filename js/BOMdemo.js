// confirm("你喜欢云云吗？")

/* 定时器，周期性得执行某一个函数
var i = 0;
setInterval(function(){
    i++;
    console.log("yunyun is annoying！*" + i)
},1000)
定时器，延迟时间只调用一次函数
setTimeout(function(){
    console.log("yunyun have not annoy!")
},10000) */


/* 地址指定
location.href = "https://www.bilibili.com/" */

//定义更换图片的函数,其实就是改变图片的src属性
function changeyunyun(){
    document.getElementById("yunlv").src = "./img/yunyun.jpg";
}function changelvlv(){
    document.getElementById("yunlv").src = "./img/lvlv.jpg";
}
//跳转b站的函数
function bilibili(){
    location.href = "https://www.bilibili.com/";
}
