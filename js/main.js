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

var test = new MovingElement(300, 300, 10, 10, 50)
    movingElements.push(test);

    setInterval(game, DISPLAY_RATE);