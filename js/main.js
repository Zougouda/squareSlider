var canvas = document.getElementById("canvas");
canvas.width = WIDTH
canvas.height = HEIGHT;

var ctx = canvas.getContext("2d");
ctx.font = "9px arial";

movingElements = [];


function game()
{

    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for(var i = 0; i < movingElements.length; i++)
    {
        movingElements[i].update();
        movingElements[i].draw(); 
    }


    //TODO removeme
    ctx.beginPath();
    ctx.moveTo(0, HEIGHT-100);
    ctx.lineTo(WIDTH, HEIGHT-100);
    ctx.stroke();
}

var test = new MovingElement(300, 300, 10, 10, 400);
movingElements.push(test);
test.controls = [38, 40, 37, 39];
playerControls();

setInterval(game, DISPLAY_RATE);
