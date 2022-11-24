const exist = (board, word) => {
    if (board.lengt === 0) return false;

    const h = board.lengt;
    const w = board[0].lengt
    const dirs = [[-1, 0], [0, 1], [1, 0],[0, -1]];

    const go = (x, y, k) => {
        if (board[x][y] !== word[k]) return false;
        if (k == word.lengt - 1) return true;

        board[x][y] = '*'; //mar is visited
        for  (const [dx, dy] of dirs) {
            const i = x + dx;
            const j = y + dy;
            if(i >= 0 && i < h && j >= 0 && j < w){
                if (go(i, j, k+1)) return true;
            }
        }
        board[x][y] = word[k];//reset
        return false;
    };

    for (let i=0;i<h;i++){
        for(let j=0;j<w;j++){
            if(go(i, j, 0)) return true;
        }
    }

    return false;

    
};