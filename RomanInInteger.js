const intToRoman =(num)=>{
    const map= { M:1000,
      CM:900,
      D:500,
      CD:400,          
      C:100,
      XC:90,
      L:50,
      XL:40,
      X:10,
      } ;
      let result=''; 
      
      for (key in map){
          result += key.repeat(Math.floor(num / map[key]));
          num %= map [key];
      }
      return result;
  };
    
  