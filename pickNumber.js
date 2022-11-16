const guessNumber = function(n){
    let l = 1;
    let r = n;
    let pick = Math.floor((r+1)/2);
    let g = guess(pick);
    while (l <= r){
        if(g > 0) {
            l = pick+1;
            pick = Math.floor((r+1)/2);
            g = guess(pick);
        }
        else if(g<0){
            r= pick-1;
            pick = Math.floor((r+1)/2);
            g = guess(pick);
        }
        else{
            return pick;
        }
    }
};