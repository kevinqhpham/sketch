function grid(){
    var columns = 16;
    var rows = 16;

    var grid = document.createElement('div');
    grid.className = 'grid';
    for (var i = 0; i < columns; ++i) {
        var column = document.createElement('div'); // create column
        column.className = 'column';
        for (var j = 0; j < rows; ++j) {
            var row = document.createElement('div'); // create row
            row.className = 'row';
            column.appendChild(row); // append row in column
        }
        grid.appendChild(column); // append column inside grid
    }
    document.body.appendChild(grid);
}
grid();