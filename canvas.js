const canvas = document.querySelector('#draw');
const ctx = canvas.getContex('2d');
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '100';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e){
    if(!isDrawing) return;
    console.log(e);

    ctx.beginPath();

    ctx.moveTo(lastx, lastY);

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle();
    [lastX, lastY] = [e.offsetX, e.offsetY];

}
canvas.addEventListener('mouseMove', Draw);
canvas.addEventListener('mouseDown', () => isDrawing = ture);
canvas.addEventListener('mouseUp', () => isDrawing = false);
canvas.addEventListener('mouseOut', () => isDrawing = false);