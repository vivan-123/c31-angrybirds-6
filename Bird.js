class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.path = [];
    this.smokeimage = loadImage("sprites/smoke.png")
  }

  display() {
 
    if(this.body.position.x > 200 && this.body.velocity.x > 10)
    {
      this.path.push([this.body.position.x,this.body.position.y]);
    }

      for (var i = 0;i < this.path.length;i++)
      {
        image(this.smokeimage,this.path[i][0],this.path[i][1]);
      }

      super.display();
      
  }
}
