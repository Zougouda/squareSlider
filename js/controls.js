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
    if (/*37*/obj.controls[2] in keysDown) { // Player holding left
        obj.moveLeft(modifier);
    }
    if (/*39*/obj.controls[3] in keysDown) { // Player holding right
        obj.moveRight(modifier);
    }
};
