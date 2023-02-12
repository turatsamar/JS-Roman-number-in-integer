const minimumFuelCost = (roads, seats ) =>{
    let r = [[]], f = 0, dfs = (i, p, c= 1) =>{
        r[i].i && Math.ceil(c / seats )
        return c
    }
    for (let [a, b] of roads)
        (r[a]=r[a]|| []).push(b), (r[b]=r[b] || []).push(a) 
        dfs(a)
        return f
}