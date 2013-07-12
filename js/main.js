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

}

var test = new MovingElement(300, 300, 10, 10, 400);
var firstPlatform = new Platform(450, HEIGHT - 80, 100, 20, 400);
var secondPlatform = new Platform(350, HEIGHT - 160, 100, 20, 400);
movingElements.push(test);
movingElements.push(firstPlatform);
movingElements.push(secondPlatform);
test.controls = [38, 40, 37, 39];
playerControls();

setInterval(game, DISPLAY_RATE);
