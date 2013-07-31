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

    this.applyGravity = function(modifier)
    {
        this.onPlatform = false;
        var travelDistance = gravitySpeed * modifier;
        for(var i = 0; i < movingElements.length; i++)
        {
            var platform = movingElements[i];
            if(platform instanceof Platform)
            {
                if( (this.x + this.width > platform.x) && ( (this.x) < (platform.x + platform.width) ) )
                {
                    if(this.y + this.height <= platform.y)
                    {
                        var distanceFromPlatform =  platform.y - (this.y + this.height);
                        if(travelDistance > distanceFromPlatform)
                            travelDistance = distanceFromPlatform;
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
        }

        if(this.onPlatform == false)
        {
            if(this.y < (HEIGHT - this.height))
            {
                if(this.y + this.height + travelDistance > HEIGHT)
                    this.y += (HEIGHT - (this.y + this.height))
                else
                    this.y += travelDistance;
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

    this.update = function(modifier)
    {
        this.applyGravity(modifier);
        keyControls(this, modifier);
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
        var travelDistance = this.jumpSpeed * modifier;
        this.canJump = true;
        for(var i = 0; i < movingElements.length; i++)
        {
            var platform = movingElements[i];
            if(platform instanceof Platform)
            {
                if( (this.x > platform.x) && ( (this.x + this.width) < (platform.x + platform.width) ) )
                {
                    if(platform.y + platform.height <= this.y)
                    {
                        var distanceFromPlatform =  this.y - (platform.y + platform.height);
                        if(travelDistance > distanceFromPlatform)
                            travelDistance = distanceFromPlatform;
                        
                        if(travelDistance == gravitySpeed*modifier) //Si le haut de l'élément touche le bord de la plateforme
                            //                        if(this.y <= (platform.y + platform.height) && (this.y + this.height) > platform.y)
                            this.canJump = false;
                    }
                }
            }
        }
        
        if(this.jumpNumber > 0 )
        {
            if(this.y > (this. lastJumpY - this.jumpMaxHeight) && this.canJump)
            {
                this.y -= travelDistance;
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
                    if ( (this.y + this.height >= platform.y) && (this.y <= platform.y + platform.height) && (this.x >= platform.x + platform.width) ) 
                    {
                        var distanceFromPlatform = this.x - (platform.x + platform.width);

                        if(distanceFromPlatform < travelDistance)
                        {
                            if(distanceFromPlatform < travelDistance)
                                travelDistance = distanceFromPlatform
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

                    if ( (this.y + this.height >= platform.y) && (this.y <= platform.y + platform.height) && (this.x <= platform.x) ) 
                    {
                        var distanceFromPlatform = platform.x - (this.x + this.width);

                        if(distanceFromPlatform < travelDistance)
                        {
                            if(distanceFromPlatform < travelDistance)
                                travelDistance = distanceFromPlatform;
                        }
                    }
                }
            }
            this.x += travelDistance;
        }
    }
}

function BadGuy(x, y, width, height, speed)
{
    MovingElement.apply(this, [x, y, width, height, speed]);

    this.behaviour = {
        x: 1
    }; 


    this.update = function(modifier)
    {
        this.applyGravity(modifier);
        this.moveLeft(modifier);
    };

    this.draw = function()
    {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
}
