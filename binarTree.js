var countNodes = function(root){
    if(!root){
        return 0;
    }


const countRight = countNodesByLevel(root, 'right');
const countLeft = countNodesBylevel(root, 'left');

if(countRight === countLeft) {
    return countRight;
}

return countNodes(root.right) + countNodes(root.left) + 1;

 
};

function countNodesByLevel(root, dir) {
    let levels = 0;
    let node = root;

    while(node){
        node = node [dir];
        levels++;
    }

    return Math.pow(2, levels) - 1; 
}