const container = document.querySelector('canvas');
const context = container.getContext('2d');

const containerSize = 600; // Number of PX

container.width = containerSize;
container.height = containerSize;

// Draw Canvas Background
context.fillStyle = "pink";
context.fillRect(0, 0, container.width, container.height);

// Drawing properties
context.strokeStyle = "purple";
context.lineWidth = 10; // Adjust for line thickness
context.lineCap = 'round';
context.lineJoin = 'round';

// State
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if (!isDrawing) return;

    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
}

container.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

container.addEventListener('mousemove', draw);
container.addEventListener('mouseup', () => isDrawing = false);
container.addEventListener('mouseout', () => isDrawing = false);