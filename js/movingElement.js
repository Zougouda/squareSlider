function MovingElement(x, y, width, height, speed)
{
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed; 
    this.jumpSpeed = gravitySpeed*2;

    this.jumpMaxHeight = 100;
    this.jumpNumber = this.maxJumpNumber = 2;
    this.lastJumpY = HEIGHT;

    this.applyGravity = function()
    {
        if(this.y < (HEIGHT - this.height))
        {
            this.y += gravitySpeed * DISPLAY_RATE / 1000;
        }
    }

    this.update = function()
    {
        this.applyGravity();
        keyControls(this, DISPLAY_RATE / 1000);
        if(this.y + this.height >= HEIGHT)
            this.jumpNumber = this.maxJumpNumber;
    }

    this.draw = function()
    {
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    this.jump = function(modifier)
    {

        if(this.jumpNumber > 0)
        {
            if(this.y > (this. lastJumpY - this.jumpMaxHeight)  )
            {
                this.y -= this.jumpSpeed * modifier;
            }
            else
                this.jumpNumber--;
        }
    }
}
