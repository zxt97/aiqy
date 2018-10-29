
var sy=document.getElementById("sy");
var sy1=document.getElementById("sy1");
var sy2=document.getElementById("sy2");
var rd=document.getElementById("rd");
var rd1=document.getElementById("rd1");
var rd2=document.getElementById("rd2");
var hy=document.getElementById("hy");
var hy1=document.getElementById("hy1");
var hy2=document.getElementById("hy2");
var wd=document.getElementById("wd");
var wd1=document.getElementById("wd1");
var wd2=document.getElementById("wd2");
var pao=document.getElementById("pao");
var pao1=document.getElementById("pao1");
var pao2=document.getElementById("pao2");
/*
function play() {
    for(var i=0;i<oImgs.length;i++){
        oImgs[i].className="none";
    }
    oImgs[now].className="on";
    now++;
    if(now==oImgs.length){
        now=0;
    }
}
function go() {
    timer=setInterval(play,1000);
}
go();
*/

var con112=document.getElementById("con112");
var li5=document.getElementById("li5");
var con12=document.getElementById("con12");
var bool=1;
var bool1=1;
var bool2=1;
var bool3=1;
var bool4=1;
var bool5=1;
li5.onclick=function () {
    if(bool){
        con112.style.display="block";
        bool=0;
        con12.style.top="470px";
    }else{
        con112.style.display="none";
        con12.style.top="170px";
        bool=1;
    }
}
sy.onclick=function () {
    if(bool1){
        sy1.style.display="block";

        rd2.style.display="none";
        rd1.style.display="block";
        hy2.style.display="none";
        hy1.style.display="block";
        wd2.style.display="none";
        wd1.style.display="block";
        pao2.style.display="none";
        pao1.style.display="block";

        sy2.style.display="none";
        bool1=false;
    }else{

        sy1.style.display="none";
        sy2.style.display="block";
        sy2.getElementsByTagName("p")[0].style.color="#00E000";
        bool1=true;
    }

}
rd.onclick=function () {
    if(bool2){
        rd1.style.display="none";

        sy2.style.display="none";
        sy1.style.display="block";
        hy2.style.display="none";
        hy1.style.display="block";
        wd2.style.display="none";
        wd1.style.display="block";
        pao2.style.display="none";
        pao1.style.display="block";

        rd2.style.display="block";
        rd2.getElementsByTagName("p")[0].style.color="#00E000";
        bool2=false;
    }else{
        rd1.style.display="block";
        rd2.style.display="none";
        bool2=true;
    }

}

hy.onclick=function () {
    if(bool3){
        hy1.style.display="none";

        sy2.style.display="none";
        sy1.style.display="block";
        rd2.style.display="none";
        rd1.style.display="block";
        wd2.style.display="none";
        wd1.style.display="block";
        pao2.style.display="none";
        pao1.style.display="block";

        hy2.style.display="block";
        hy2.getElementsByTagName("p")[0].style.color="#00E000";
        bool3=false;
    }else{
        hy1.style.display="block";
        hy2.style.display="none";
        bool3=true;
    }

}
wd.onclick=function () {
    if(bool4){
        wd1.style.display="none";

        sy2.style.display="none";
        sy1.style.display="block";
        hy2.style.display="none";
        hy1.style.display="block";
        rd2.style.display="none";
        rd1.style.display="block";
        pao2.style.display="none";
        pao1.style.display="block";

        wd2.style.display="block";
        wd2.getElementsByTagName("p")[0].style.color="#00E000";
        bool4=false;
    }else{
        wd1.style.display="block";
        wd2.style.display="none";
        bool4=true;
    }

}
pao.onclick=function () {
    if(bool5){
        pao1.style.display="none";

        sy2.style.display="none";
        sy1.style.display="block";
        hy2.style.display="none";
        hy1.style.display="block";
        wd2.style.display="none";
        wd1.style.display="block";
        rd2.style.display="none";
        rd1.style.display="block";

        pao2.style.display="block";
        pao2.getElementsByTagName("p")[0].style.color="#00E000";
        bool5=false;
    }else{
        pao1.style.display="block";
        pao2.style.display="none";
        bool5=true;
    }

}

window.onload = function(){
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons');
    var buttonsItem = buttons.getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 0;
    var startX = 0;
    var endX = 0;


    container.addEventListener('touchend',function(event){
        if(event.changedTouches.length==1&&this.getAttribute('disabled')!='disabled'){
            var touch = event.changedTouches[0];
            endX = touch.pageX;
            var offset = endX-startX;
            console.log(offset);
            if(Math.abs(offset)>=50){
                if(offset<0){// 右滑
                    nextMethod();
                }else{
                    prevMethod();
                }
            }
        }
    });

    container.addEventListener('touchmove',function(){
        event.preventDefault();
    })

    container.addEventListener('touchstart',function(event){
        if(event.targetTouches.length==1&&this.getAttribute('disabled')!='disabled'){
            var touch = event.targetTouches[0];
            startX = touch.pageX;
        }
    })

    prev.addEventListener('click',function(){
        if (this.getAttribute('disabled')=='disabled') {
            return false;
        }
        prevMethod();
    });

    next.addEventListener('click',function(){
        if (this.getAttribute('disabled')=='disabled') {
            return false;
        }
        nextMethod();
    });

    for(var i=0;i<buttonsItem.length;i++){
        buttonsItem[i].onclick = function(){
            if (this.getAttribute('disabled')=='disabled') {
                return false;
            }
            var i = this.getAttribute('index');
            var length = Math.abs((i-index)*500);
            var direction = 'right';
            if (length<0) {
                direction = 'left';
            }
            index = i;
            document.getElementsByClassName('on')[0].setAttribute('class','');
            buttonsItem[index].className = 'on';
            animate(direction,1,length);
        }
    }

    var result=window.matchMedia('min-width:1024px');
    if(result.matches){
        function prevMethod(){
            if(index==0){
                index = 4;
                animate('right',40,6000);
            }else{
                index--;
                animate('left',1,1500);
            }
            document.getElementsByClassName('on')[0].setAttribute('class','');
            // buttonsItem[index].setAttribute('class','on');
            buttonsItem[index].className = 'on';
        }

        function nextMethod(){
            if(index==4){
                index = 0;
                animate('left',40,6000);
            }else{
                index++;
                animate('right',1,1500);
            }
            document.getElementsByClassName('on')[0].setAttribute('class','');
            buttonsItem[index].className = 'on';
        }

    }else{
        function prevMethod(){
            if(index==0){
                index = 4;
                animate('right',40,3920);
            }else{
                index--;
                animate('left',1,980);
            }
            document.getElementsByClassName('on')[0].setAttribute('class','');
            // buttonsItem[index].setAttribute('class','on');
            buttonsItem[index].className = 'on';
        }

        function nextMethod(){
            if(index==4){
                index = 0;
                animate('left',40,3920);
            }else{
                index++;
                animate('right',1,980);
            }
            document.getElementsByClassName('on')[0].setAttribute('class','');
            buttonsItem[index].className = 'on';
        }
    }



    function animate(direction,speed,length){
        var end = length/speed;
        var count = 0;
        for(var i=0;i<end;i++){
            setTimeout(function(){
                count++;
                var left = list.offsetLeft;
                if (direction=='right') {
                    left -= speed;
                }else{
                    left += speed;
                }
                list.style.left = left+'px';
                if(count<end-1){
                    disabledButtons();
                }else{
                    resumeButtons();
                }
            },speed*i);
        }
    }

    function disabledButtons(){
        for(var i=0;i<5;i++){
            buttonsItem[i].setAttribute('disabled','disabled');
        }
        prev.setAttribute('disabled','disabled');
        next.setAttribute('disabled','disabled');
        container.setAttribute('disabled','disabled');
    }

    function resumeButtons(){
        for(var i=0;i<5;i++){
            buttonsItem[i].removeAttribute('disabled');
        }
        prev.removeAttribute('disabled');
        next.removeAttribute('disabled');
        container.removeAttribute('disabled');
    }
}
