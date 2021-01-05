class Polygon{
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 2.5,
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        fill("Black");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}