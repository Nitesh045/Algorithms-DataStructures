let s="nitesh";
let sp= s.split('')
console.log(sp)
function reverseS(s){
    console.log(s.length-1)
    let r = '';
    for(let i = s.length - 1 ; i >=0; i--){
        console.log(s[i])
        r += s[i];
        
    }
    return r
}

console.log(reverseS(sp))