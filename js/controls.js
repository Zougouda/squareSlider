// Handle keyboard controls
var keysDown = {};

function playerControls()
{
    addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true;
    }, false);

    addEventListener("keyup", function (e) {
        if (e.keyCode == test.controls[0]) { // Player holding up
            test.jumpNumber--;
            test.lastJumpY = test.y + test.height;
        }
        delete keysDown[e.keyCode];
    }, false);
}

function playerNoControls()
{
    removeEventListener("keydown", function(){}, false);
}

//Keyboard controls
var keyControls = function (obj, modifier) {
    if (/*38*/obj.controls[0] in keysDown) { // Player holding up
        if(obj.y > 0)
        {
            obj.jump(modifier);
        }
    }
    if (/*40*/obj.controls[1] in keysDown) { // Player holding down
        if((obj.y + obj.height/2) < HEIGHT)
        {
            obj.y += obj.speed * modifier;
        }
    }
    if (/*37*/obj.controls[2] in keysDown) { // Player holding left
        if((obj.x + obj.width/2) > 0)
        {
            obj.x -= obj.speed * modifier;
        }
    }
    if (/*39*/obj.controls[3] in keysDown) { // Player holding right
        if((obj.x + obj.width /2) < WIDTH)
        {
            obj.x += obj.speed * modifier;
        }
    }
};
