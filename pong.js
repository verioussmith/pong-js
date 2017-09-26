const canvas = document.getElementById('pong');
const c = canvas.getContext('2d');

// Draw the Canvas 
c.fillStyle = '#000';
c.fillRect(0, 0, canvas.width, canvas.height);

// Draw the Ball
c.fillStyle = '#fff';
c.fillRect(0, 0, 10, 10);
