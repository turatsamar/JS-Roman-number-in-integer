var findBall = function(grid)
{
    const rows = grid.length, cols = grid[0].length;

    const getPosition = function(row, col)
    {
        if(grid[row][col] ===1)
        {
            if(col === cols-1 || grid[row][col+1] === -1)
                return -1;
            return col+1;
        }
        else
        {
            if(col === 0 || grid [row] [col-1] === 1)
                return -1;
            return col-1;  
        }
    };

    let result = [];
    for(let col=0;col<cols;col++){
        let pos = col;
        for(let row=0;row<rows;row++){
            pos = getPosition(row, pos);
            if(pos === -1)
            break;
        }
        result.push(pos);
    }
    return result;
}