var size = 1;
grid();
const button = document.querySelector("#btn");
    button.addEventListener('click', () => {
        size = prompt("Enter size for dimensions of drawing board (MAX 100)");
        if (document.getElementById("grid")) {
            const rem = document.getElementById('grid');
            rem.remove();
        }
        grid();
        draw();
});

function grid(){  
    let grid = document.createElement('div');
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
    document.body.appendChild(grid);
}

function draw(){
    let drawing = false;
    const row = document.querySelectorAll(".row");
    row.forEach((item) => {
        item.addEventListener('mousedown', () => {
            drawing = true;
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


