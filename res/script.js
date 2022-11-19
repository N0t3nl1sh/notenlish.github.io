


var ww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
ww -= 100;
var wh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
wh -= 100;

console.log("Start");

const balls = document.getElementsByClassName("ball");

for (var i=0; i<balls.length; i++) {
    randompos(balls[i]);
}

function randompos(element){
    var l = String((Math.random()*ww)+50 ) + "px";
    var t = String((Math.random()*-wh) ) + "px";

    element.style.top = t;
    element.style.left = l;   
}

var dirx = Math.floor( Math.random() * 4 )
var diry = Math.floor( Math.random() * 4 )

dirx = Math.cos(dirx) // -1 1 arası
diry = Math.cos(diry)

var wrapper = document.getElementsByClassName("wrapper")[0];
var wrapperrect = wrapper.getBoundingClientRect();

console.log( wrapperrect.top, wrapperrect.left, wrapperrect.height, wrapperrect.width );

function move(){
    for (var i=0; i<balls.length; i++) {
        var val = parseInt(balls[i].style.left, 10);
        balls[i].style.left = String(val + (dirx * 15)) + "px";
        var val = parseInt(balls[i].style.top, 10);
        balls[i].style.top = String(val + (diry * 10)) + "px";
        
        var visible = isInViewport(balls[i]);
        if (visible == false) {
            /*
            if part[0] < ( -20 ) or part[0] > ( obj[0].width +20 ):  
                    if obj[1].x > 0:
                        part[0] = -5
                    elif obj[1].x < 0: #sola doğru gidiyor
                        part[0] = obj[0].width + 5
                if part[1] < (-20 ) or part[1] > ((obj[0].height +20 )):
                    if obj[1].y > 0:
                        part[1] = -5
                    elif obj[1].y < 0:
                        part[1] = obj[0].height + 5 
            */
            if (parseInt(balls[i].style.left,10) > window.innerWidth) {
                balls[i].style.left = "0" + "px";
                console.log("going right");
            }
            else if (parseInt(balls[i].style.left,10) < 0) {
                balls[i].style.left = String(window.innerWidth) + "px";
                console.log("going left");
            }

            if (parseInt(balls[i].style.top,10) > (wrapperrect.height+wrapperrect.top)/3  ) {
                balls[i].style.top = String(-(wrapperrect.height)) + "px";
                console.log("going down");
            }
            else if (parseInt(balls[i].style.top,10) < 0) {
                balls[i].style.top = String( (wrapperrect.height-(wrapperrect.top*2))/3   ) + "px";
                console.log("going up");
            }

            //console.log(balls[i].style.top,balls[i].style.left, "vw:", window.innerWidth,window.innerHeight)
            //balls[i].style.left = String( ((dirx+1)/2)*(ww-100) ) + "px";
        }
    }
}

var myVar = setInterval(move, 4);

function isInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
