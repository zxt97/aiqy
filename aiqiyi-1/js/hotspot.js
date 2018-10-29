var gz=document.getElementById("gz");
var tj=document.getElementById("tj");
var xsp=document.getElementById("xsp");

gz.onclick=function () {
    gz.getElementsByTagName("span")[0].style.display="block";
    gz.style.color="#00E000";
    tj.getElementsByTagName("span")[0].style.display="none";
    tj.style.color="#BCBCBC";
    xsp.getElementsByTagName("span")[0].style.display="none";
    xsp.style.color="#BCBCBC";
}
tj.onclick=function () {
    gz.getElementsByTagName("span")[0].style.display="none";
    gz.style.color="#BCBCBC";
    tj.getElementsByTagName("span")[0].style.display="block";
    tj.style.color="#00E000";
    xsp.getElementsByTagName("span")[0].style.display="none";
    xsp.style.color="#BCBCBC";
}
xsp.onclick=function () {
    gz.getElementsByTagName("span")[0].style.display="none";
    gz.style.color="#BCBCBC";
    tj.getElementsByTagName("span")[0].style.display="none";
    tj.style.color="#BCBCBC";
    xsp.getElementsByTagName("span")[0].style.display="block";
    xsp.style.color="#00E000";
}
var con1 =document.getElementById("con1");
var con13 =document.getElementById("con13");
var vid =document.getElementById("vid");
var header=document.getElementById("header");
vid.onclick=function () {
    alert("hello");
    //header.style.display="none";
}
