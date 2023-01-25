const canvas = document.querySelector('#Draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '100';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
var checkBox = document.getElementById("check");
let colorON =true

function draw(e) {
  if (colorON) {
  var color = document.getElementById('color').value;}
  if(!isDrawing) return;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    if (checkBox.checked == true && colorON == false){
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      hue++;
      if (hue >= 360) {
      hue = 0;}
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      direction = !direction;
    }
  
    if(direction) {
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }
  }

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
checkBox.addEventListener('change', function() {
  if (this.checked) {
    colorON = false;
  } else {
    colorON = true;
  }
});