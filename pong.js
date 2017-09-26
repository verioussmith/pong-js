class Vec
{
	constructor(x = 0, y = 0)
	{
		this.x = x
		this.y = y
	}
}
  
class Rect
{
	constructor(w, h)
	{
		this.pos = new Vec;
		this.size = new Vec(w, h);
	}
}

class Ball extends Rect
{
	constructor()
	{
		super(10, 10);
		this.vel = new Vec;
	}
}

const canvas = document.getElementById('pong');
const c = canvas.getContext('2d');

const ball = new Ball;
console.log(Ball);


// Draw the Canvas 
c.fillStyle = '#000';
c.fillRect(0, 0, canvas.width, canvas.height);

// Draw the Ball
c.fillStyle = '#fff';
c.fillRect(0, 0, 10, 10);
