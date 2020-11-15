var carrot = document.getElementById("carrot");

var context = carrot.getContext('2d');
var centerX = carrot.width / 2;
var centerY = carrot.height / 2;
var radius = 40;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = 'orange';
context.fill();
