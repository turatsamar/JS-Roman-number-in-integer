var reverseVolwels = function(s){
    let str = s.split('')
    let left = 0
    let right = -1

    while(left<right){
        while(left<right){
            if(!isVowel(str[left])){
                left++
            }else{
                break;
            }
        }

        while(left<right){
            if(!isVowel(str[right])){
                right--
            }else{
                break
            }
        }
        let temp = str[left]
        str[left] = str[right]
        str[right] = temp
        left++
        right--
    }
    return str.join('')
};

let isVowel = (letter) =>{
    let vowel = 'aeiou'
    return vowel.includes(letter.toLowerCase)
}