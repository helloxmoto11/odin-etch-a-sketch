const container = document.querySelector('.container');
const containerSize = 600 // Number of PX

container.style.width = containerSize + 'px';
container.style.height = containerSize + 'px';
container.style.backgroundColor = 'yellow';
container.style.display = "flex";
container.style.flexWrap = "wrap";

// Change this size if your want.
// But should never be less than 1
// Also, If the grid size is to big it will cause problems with performance.
// because you are creating gridSize * gridSize number of elements....
// So keep the gridSize 100 or less.
// Even gridSize = 100 will create 10,000 elements.
const gridSize = 100;

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const box = document.createElement('div');
        box.style.width = containerSize / gridSize + "px";
        box.style.height = containerSize / gridSize + "px";
        box.style.backgroundColor = "pink";
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = "orange";
        });
        container.appendChild(box);
    }
}