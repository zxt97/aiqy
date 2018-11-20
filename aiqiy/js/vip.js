
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
