//Саптардын массивиндеги
// символдорду бириктирүү менен Саптын узундугун көбөйтүү
//

//funksia teksheret eger baardyk saptardyn tuzulushundogu aiyrmany!
function check(s)
{
    let a = new Set();
    //tuzulushundogu kaitalanmalardy teksherebiz!
    for (let i=0; i<s.length; i++)
    {
        if(a.has(s[i]))
        return false;
    }
    a.add(s[i])
    return true
}

//Берилген массивден мүмкүн болгон бардык 
//саптарды түзүү функциясы

function helper(arr,ind){
    let fin =[]
    fin.push("")
    // maaniluu jeri
    if (ind==arr.length)
    return fin

    //Ар бир сапты башталгыч 
    //субсап катары карап, түзүлгөн сапты сактаңыз
    let tmp = helper(arr, ind +1);
    let ret = tmp;

    //Башка саптардын натыйжасына учурдагы сапты кошуп,
    // символдор уникалдуу же уникалдуу эмес экенин текшериңиз
    for (let i=0;i<tmp.length;i++){
        let test = tmp[i] + arr[ind];
        if (check(test))
        ret.push(test);
    }
    return ret;
}
// saptyn maksimalduu mymkun
// bolgon uzundugu tabuu funksiasy
function maxLength(arr){
    let tmp = helper(arr, 0);
    let len = 0;
     for (let i=0;i<tmp.length;i++)
     {
        len = len >tmp[i].length ? len : tmp[i].length;
     }
     //jooptu kaitaruu
     return len;
}