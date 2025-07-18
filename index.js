const container = document.querySelector('canvas');
const context = container.getContext('2d');

const containerSize = 600 // Number of PX

container.width = containerSize;
container.height = containerSize;
const gridSize = 100;

const pixelSize = containerSize / gridSize;

//Draw Canvas Background
context.fillStyle = "pink"
context.fillRect(0, 0, container.width, container.height);

// Draw boxes
function draw(e) {
    const x = e.offsetX;
    const y = e.offsetY;

    context.fillStyle = "purple";
    context.fillRect(x, y, pixelSize, pixelSize)

}
container.addEventListener('mousemove', draw);