/*

    N220 Section 25750
    Harmanjot Singh
    Animation
    31 January 2020

*/

// empty array to store ball objects
const balls = [];

function setup() {
    // set width and height for canvas
    createCanvas(800, 600);
    // create 12 new ball objects
    for (var i = 0; i < 12; i++) { 
        balls[i] = new Ball();
    }
}

function draw(){
    // set the background color
    background("lightgray");
    // for every single ball run the move and display function
    for (var i = 0; i < balls.length; i++) { 
        balls[i].display();
        balls[i].movement(); 
    } 
}

// constructor function for creating balls
function Ball() {  
    // set the ball diameter 
    this.d = 24;
    // set random x position for every ball
    this.x = random(this.d*2,width-this.d*2); 
    // set random y position for every ball     
    this.y = random(this.d*2,height-this.d*2);
    // set random speed between -5 and 5 (not inlcuding 5)
    this.speedX = random(-5, 5); 
    // set random speed between 5 and -5 (not inlcuding -5)
    this.speedY = random(5, -5);

    this.display = function() {
        // make the balls black
        fill(0)
        // set the coordinates and diameter for the circle
        circle(this.x, this.y, this.d*2);
    }
  
    this.movement = function() {
        // keep adding speed to the current value of x position
        this.x += this.speedX;
        // keep adding speed to the current value of y position 
        this.y += this.speedY; 
        // keep the balls bouncing from left and right side
        if (this.x > width-this.d || this.x < this.d) {
            // change the direction of the ball
            this.speedX = -this.speedX;
        }
        // keep the balls bouncing from top and bottom side
        if (this.y > height-this.d || this.y < this.d) {
            // change the direction of the ball
            this.speedY = -this.speedY;
        }
    }

}