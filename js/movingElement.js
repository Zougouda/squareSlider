function MovingElement(x, y, width, height, speed)
{
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed; 

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
    }

    this.draw = function()
    {
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
