var size = 0;
const button = document.querySelector("#btn");
    button.addEventListener('click', () => {
        size = prompt("Enter size for dimensions of drawing board (MAX 100)");
        grid();
        draw();
});

function grid(){  
    var grid = document.createElement('div');
    grid.className = 'grid';
    for (var i = 0; i < size; ++i) {
        var column = document.createElement('div'); // create column
        column.className = 'column';
        for (var j = 0; j < size; ++j) {
            var row = document.createElement('div'); // create row
            row.className = 'row';
            column.appendChild(row); // append row in column
        }
        grid.appendChild(column); // append column inside grid
    }
    document.body.appendChild(grid);
}

function draw(){
    const row = document.querySelectorAll(".row");
    row.forEach((item) => {
        item.addEventListener('mousedown', () => {
            item.style.backgroundColor = 'black';
        });
    });
}



