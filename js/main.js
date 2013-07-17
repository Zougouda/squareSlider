var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");



function startGame()
{
    //test
    WIDTH = finalWidth, HEIGHT = finalHeight;

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

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

    //var test = new MovingElement(300, 300, 10, 10, 400);
    if(typeof test != "undefined")
        delete test;
    test = new MovingElement(playerX, playerY, 10, 10, 400);
    /*var firstPlatform = new Platform(450, HEIGHT - 80, 100, 20, 400);
      var secondPlatform = new Platform(350, HEIGHT - 160, 100, 20, 400);*/
    movingElements.push(test);
    if(platformsFromLoad.length > 0)
        movingElements =  movingElements.concat(platformsFromLoad); //platforms add
    /*movingElements.push(firstPlatform);
      movingElements.push(secondPlatform);*/
    test.controls = [38, 40, 37, 39];
    playerNoControls();
    playerControls();

    if(typeof gameInterval != "undefined")
        clearInterval(gameInterval);
    gameInterval = setInterval(game, DISPLAY_RATE);
}

//startGame();
