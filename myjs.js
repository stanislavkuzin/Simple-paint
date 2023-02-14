'use strict';

const body = document.body;
const canvas = document.getElementById('canvas');
canvas.height = 600;
canvas.width = 1200;
let ctx = canvas.getContext('2d');
range.value = 1;

function clear() {
    ctx.clearRect(0,0,1200,600);
}

button.addEventListener('click', clear);

function start(event) {
        ctx.strokeStyle = color.value;
        ctx.lineWidth = range.value / 2;
        ctx.beginPath();
    if (event.target.tagName === 'CANVAS') {
        function paint(event) {
            ctx.lineTo(event.x - 23, event.y - 103);
            ctx.stroke();
        }
        canvas.addEventListener('mousemove', paint);

        function stop(){
            canvas.removeEventListener('mousemove', paint);
            body.removeEventListener('mouseup', stop);
            body.addEventListener('mousedown', start);
        }
        body.addEventListener('mouseup', stop);
    }
}

body.addEventListener('mousedown', start);

