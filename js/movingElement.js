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
        this.onPlatform = false;
        for(var i = 0; i < movingElements.length; i++)
        {
            var platform = movingElements[i];
            if(platform instanceof Platform)
            {
                if( (this.x > platform.x) && ( (this.x + this.width) < (platform.x + platform.width) ) )
                {
                    if( (this.y + this.height < platform.y) || (this.y > platform.y + platform.height/2 ) )
                    {
                        //this.onPlatform = false;
                        continue;
                    }
                    else
                    {
                        this.onPlatform = true;
                        this.resetJumpNumber();
                        this.lastJumpY = this.y;
                    }
                }
            }
        }

        if(this.onPlatform == false)
        {
            if(this.y < (HEIGHT - this.height))
            {
                this.y += gravitySpeed * DISPLAY_RATE / 1000;
            }
            else
            {
                this.lastJumpY = this.y;
                this.resetJumpNumber();
                /*alert("LOSER!");
                startGame();*/
            }
        }
    }

    this.update = function()
    {
        this.applyGravity();
        keyControls(this, DISPLAY_RATE / 1000);
    }

    this.resetJumpNumber = function()
    {
            this.jumpNumber = this.maxJumpNumber;
    };

    this.draw = function()
    {
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    this.jump = function(modifier)
    {
        this.canJump = true;
        for(var i = 0; i < movingElements.length; i++)
        {
            var platform = movingElements[i];
            if(platform instanceof Platform)
            {
                if( (this.x > platform.x) && ( (this.x + this.width) < (platform.x + platform.width) ) )
                {
                    if(this.y <= (platform.y + platform.height) && (this.y + this.height) > platform.y)
                        this.canJump = false;
                }
            }
        }

        if(this.jumpNumber > 0)
        {

            if(this.y > (this. lastJumpY - this.jumpMaxHeight) && this.canJump == true )
            {
                this.y -= this.jumpSpeed * modifier;
            }
            else
                this.jumpNumber--;
        }
    }

    this.moveLeft = function(modifier)
    {
        if(this.x > 0)
        {
            var travelDistance = this.speed * modifier;
            for(var i = 0; i < movingElements.length; i++)
            {
                var platform = movingElements[i];
                if(platform instanceof Platform)
                {
                    /*if( this.x > platform.x + platform.width || this.x + this.width < platform.x )
                    {
                        continue;
                    }
                    else
                    {
                        if ( (this.y + this.height >= platform.y) && (this.y <= platform.y + platform.height) ) 
                            this.canMove = false;
                    }*/

                    if ( (this.y + this.height >= platform.y) && (this.y <= platform.y + platform.height) ) 
                    {
                        var distanceFromPlatform = this.x - (platform.x + platform.width);

                        if(distanceFromPlatform < travelDistance)
                        {
                            if(distanceFromPlatform < travelDistance)
                                travelDistance = this.x - (platform.x + platform.width);
                            if(distanceFromPlatform <= 0)
                                travelDistance = 0;
                        }
                    }
                }
            }
                this.x -= travelDistance;
        }
    }

    this.moveRight = function(modifier)
    {
        if((this.x + this.width) < WIDTH)
        {
            var travelDistance = this.speed * modifier;
            for(var i = 0; i < movingElements.length; i++)
            {
                var platform = movingElements[i];
                if(platform instanceof Platform)
                {
                    /*if( this.x > platform.x + platform.width || this.x + this.width < platform.x )
                    {
                        continue;
                    }
                    else
                    {
                        if ( (this.y + this.height >= platform.y) && (this.y <= platform.y + platform.height) ) 
                            this.canMove = false;
                    }*/

                    if ( (this.y + this.height >= platform.y) && (this.y <= platform.y + platform.height) ) 
                    {
                        var distanceFromPlatform = platform.x - (this.x + this.width);

                        if(distanceFromPlatform < travelDistance)
                        {
                            if(distanceFromPlatform < travelDistance)
                                travelDistance = platform.x - (this.x + this.width);
                            if(distanceFromPlatform <= 0)
                                travelDistance = 0;
                        }
                    }
                }
            }
                this.x += travelDistance;
        }
    }
}
