class Box4 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
 

    display(){
      if(this.body.speed < 3){
        fill("Blue");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
      }
      
      else {
        World.remove(world, this.body);
        push();
        this.visibility = 0;
        tint(255, this.visiblity);
        scoreVariable = scoreVariable+1;
        pop();
      }
    }
  };