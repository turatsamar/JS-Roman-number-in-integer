const isUhly = (n)=>{
    if(n <= 0)return false;

 
    for(const divider of [2, 3, 5]) {
        if(n % divider === 0){
            return isUhly(n/divider);
        }
    }
    return false;
};