    let element=document.getElementById("mirror");

    let widthMirror = element.clientWidth;  
    let heightMirror= element.clientHeight;
    let borderColorFrame = element.style.borderColor;
    let borderRadiusFrame = element.style.borderRadius;
    let boxShadowFrame = element.style.boxShadow;
    

function showWidth(){
    alert(heightMirror);
}
function showHeight(){
    alert(heightMirror);
}
function changeHeight(){
    element.style.height = heightMirror*3+"px";
    element.style.width = widthMirror+"px";
}
function changeWidth(){
    element.style.height = heightMirror+"px";
    element.style.width = widthMirror*3+"px";
}
function bigSize(){
    element.style.height = heightMirror*2.5+"px";
    element.style.width = widthMirror*2.5+"px";
}
function smallSize(){
    element.style.height = heightMirror+"px";
    element.style.width = widthMirror+"px";
}
function makeRound(){
    element.style.borderRadius="50%";
}
function makeRounded(){
    element.style.borderRadius="40px";
}
function makeBox(){
    element.style.borderRadius="0";
}
function hiddenMirror(){
    element.style.display="none";
}
function showMirror(){
    element.style.display="block";
}
function whiteFrame(){
    element.style.borderColor="#ffffff";
    element.style.boxShadow="0 15px 30px  rgba(255, 255, 255, 0.8)"
    
}
function blueFrame(){
    element.style.borderColor="#ccffff";
    element.style.boxShadow="0 15px 20px rgba(46, 229, 157, 0.4)"
}
function pinkFrame(){
    element.style.borderColor="#ffccff";
    element.style.boxShadow="0 15px 20px rgba(236, 49, 183, 0.4)"

}

/* сброс настроек, присваиванием исходных значений
function resetMirror(){
    element.style.borderRadius = borderRadiusFrame;
    element.style.borderColor = borderColorFrame;
    element.style.height = heightMirror+"px";
    element.style.width = widthMirror+"px";
    element.style.boxShadow = boxShadowFrame;
}
*/

//сброс настроек путём обновления страницы
function resetMirror(){
    window.location.reload();
}