var size = 1;
grid();

const button = document.querySelector(".btn"); // user input grid dimensions
button.addEventListener('click', () => {
    size = prompt("Enter size for dimensions of drawing board (MAX 100)");
    const rem = document.getElementById('grid');
    rem.remove();
    grid();
    draw();
});

const smallGrid = document.querySelector(".small"); // creates 16x16 grid
smallGrid.addEventListener('click', () => {
    const rem = document.getElementById('grid');
    rem.remove();
    size = 16;
    grid();
    draw();
});

const medGrid = document.querySelector(".medium"); // creates 32x32 grid
medGrid.addEventListener('click', () => {
    const rem = document.getElementById('grid');
    rem.remove();
    size = 32;
    grid();
    draw();
});

const largeGrid = document.querySelector(".large"); // creates 64/64 grid
largeGrid.addEventListener('click', () => {
    const rem = document.getElementById('grid');
    rem.remove();
    size = 64;
    grid();
    draw();
});

function grid(){  
    let grid = document.createElement('div');
    let container = document.querySelector(".container");
    grid.className = 'grid';
    grid.setAttribute('id', 'grid');
    for (let i = 0; i < size; ++i) {
        let column = document.createElement('div'); // create column
        column.className = 'column';
        for (let j = 0; j < size; ++j) {
            let row = document.createElement('div'); // create row
            row.className = 'row';
            column.appendChild(row); // append row in column
        }
        grid.appendChild(column); // append column inside grid
    }
    container.appendChild(grid);
}

function draw(){
    let drawing = false;
    const row = document.querySelectorAll(".row");
    row.forEach((item) => {
        item.addEventListener('mousedown', () => {
            drawing = true;
            item.style.backgroundColor = 'black';
        });
        item.addEventListener('mousemove', () => {
            if(drawing == true ){
                item.style.backgroundColor = 'black';
            }
        });
        item.addEventListener('mouseup', () => {
            drawing = false;
        })
    });

}


