function Floater(x,y,dx,dy,alpha,radius,c) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.alpha = alpha;
  this.alphaX = 0.01;
  this.radius = radius;
  this.c = c;
  
  this.draw = function() {
    this.c.globalAlpha = this.alpha;
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.c.strokeStyle = 'transparent';
    this.c.fillStyle = 'rgb(162, 125, 87)';
    this.c.fill();
    this.c.stroke();
  }

  this.update = function() {
    if (this.x >= this.c.canvas.width - this.radius || this.x <= 0 + this.radius) this.dx = -this.dx;
    if (this.y >= this.c.canvas.height - this.radius || this.y <= 0 + this.radius) this.dy = -this.dy;
    if (this.alpha >= 0.9 || this.alpha <= 0.05) this.alphaX = -this.alphaX;
    this.x += this.dx;
    this.y += this.dy;
    this.alpha += this.alphaX;

    this.draw();
  }
}

export default Floater;