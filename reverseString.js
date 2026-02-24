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


//object ,unorderd , key value pair

// * understand the problems 
// explore concrete example
// break it down
// solve / simplify
// look back and refactor always in the code 


// write a function 

let arr1 = [1,2,4,3];
let arr2 = [9,16,1,4];

function same(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;

    }
    for(let i = 0; i < arr1.length ; i++){
        let correctIndex=arr2.indexOf(arr1[i]**2)
        if(correctIndex === -1){
            return 0;
        }
        arr2.splice(correctIndex,1)
        console.log(arr2)
    }
    return 1;
}
console.log(same(arr1,arr2))



let s1="niteshh";
let s2="tehsinh";

function validAnagram(s1,s2){   
    if(s1.length !== s2.length){
        return false;
    }
    let f1={};
    let f2={};
    for(let char of s1){
        f1[char] = (f1[char] || 0) + 1;
    }
    for(let char of s2){
        f2[char] = (f2[char] || 0) + 1;
    }
    console.log(f1)
    console.log(f2)
    for(let key in f1){
        if(f1[key] !== f2[key]){
            return false;
        }
        if(!(key in f2)){
            return false;
        }

    }
    return true;
}
console.log(validAnagram(s1,s2))