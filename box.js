class Box
{
    constructor(xpos,ypos,width1, height1)
   {
     var box_options = 
     { 
       isStatic : false,
      'restitution': 0.8,
      'friction': 0.7,
      'density': 0.5
     } 
     this.visibility = 255;
     this.body = Bodies.rectangle(xpos,ypos,width1,height1,box_options);
     this.width = width1;
     this.height = height1;
     World.add(world,this.body);
   }
  display()
  {
    if (this.body.speed < 4)
    {
    var position = this.body.position;
    var angle = this.body.angle;
    push();
        translate(position.x,position.y)
        rectMode(CENTER);
        rotate(angle);
        rect(0,0,this.width,this.height)
        fill (0);
        pop();
    } else 
    {
      push ();
      fill (0,this.visibility)
      this.visibility = this.visibility - 5;
      pop (); 
      //console.log (this.visibility);
      if (this.visibility <= 0)
      {
        World.remove (world,this.body);
        console.log (this.visibility);
        score = score + 1;
      }
    }
  }
}