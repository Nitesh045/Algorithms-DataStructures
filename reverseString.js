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

console.log(reverseS(sp));

// add upto n number 

let num =8 ;
function addUptoN(num){
    let total=0;
    for(let i =1;i<=num; i++){
        total+=i
    }
    return total
}
console.log(addUptoN(num));

function secondWayToAdd(n){
    return n*(n+1)/2
}
console.log(secondWayToAdd(num));

