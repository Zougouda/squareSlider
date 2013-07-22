function Platform(x, y, width, height, speed)
{
   MovingElement.apply(this, [x, y, width, height, speed]);
   this.behaviour = {x: 0, y: 0};

   this.update = function()
   {
    this.x += this.speed * DISPLAY_RATE / 1000 * this.behaviour.x;
    this.y += this.speed * DISPLAY_RATE / 1000 * this.behaviour.y;
   };
}
