// function countUniqueValues(arr) {
//   // Counts unique values in a sorted array using two-pointer technique
//   if (!Array.isArray(arr) || arr.length === 0) return 0;
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1;
// }

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));

// function anagramString(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let lookup = {};
//   for (let char of str1) {
//     let letter = char;
//     lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
//   }
//   for (let char of str2) {
//     let letter = char;
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }
//   return true;
// }
// console.log(anagramString("niiit", "ntiii"));

// function sameFrequency(n1,n2){
//   // good luck. Add any arguments you deem necessary.
//   // let arr1=[]
//   // let arr2=[]
//   // while(n1>0 && n2>0){
//   //     let m= Math.floor(n1%10);
//   //     console.log(m)
//   //     let m1=Math.floor(n2%10);
//   //     arr1.push(m);
//   //     arr2.push(m1)
//   //     n1=Math.floor(n1/10); n2=Math.floor(n2/10)
//   // }
//   // console.log(arr1,arr2)
//   // for(let val of arr1){
//   //     if(arr2.indexOf(val)===-1){
//   //         return false
//   //     }
//   //     arr2.splice(arr2.indexOf(val),1)
//   // }
//   // return true


//   n1 = n1.toString();
//   n2 = n2.toString();
//   console.log(n1,n2)
//   if (n1.length !== n2.length) {
//     return false;
//   }
//  let lookup = {};
//  for(let char of n1){
//   console.log(char)
//    let letter = char;
//    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
//  }
//   for(let char of n2){
//     let letter = char;
//     if(!lookup[letter]){
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }
//   return true;

  
// }
// console.log(sameFrequency(182,281))


// function zeroSumPair(arr){
//   let left =0
//   let right = arr.length-1;
//   while(left<right){
//     let sum = arr[left]+arr[right];
//     if(sum===0){
//       return [arr[left],arr[right]]
//     }else if(sum>0){
//       right --;
//     }else{
//       left++;
//     }
//   }
// }
// console.log(zeroSumPair([-3,-2,-1,0,1,2,3]))

// function isDuplicateValue(...args) {
//   let lookup= {}
//   for(let val of args){
//     lookup[val] ? (lookup[val] +=1) :(lookup[val]=1 ) }

//     for(key in lookup){
//       if(key > 1){
//         return true;
//       }
//     }
//     return false;
// }
// console.log(isDuplicateValue(1,2,34,6,7,8))


// constructNote('aa','abc);

function constructNote(letter,message){
  // let s1 ={};
  // let s2={}
  // for(let char of letter){
  //   s1[char] ? (s1[char] +=1) :(s1[char]=1)
  // }
  // console.log(s1);
  // for(let char of message){
  //   s2[char] ? (s2[char]+=1):(s2[char]=1)
  // }
  // console.log(s2)
  // for(key in s1){
  //   console.log(key)
  //   if(!(s2[key])){
  //     return false
  //   }else if(s1[key] !==s2[key]){
  //     return false
  //   }
  // }
  // return true

  if(typeof letter !== 'string' && typeof message !== 'string'){
     console.error("require string");
  }
     if(letter.letter>message.letter) return false;
     if(letter.letter<=0) return true;
     let count ={};
     for (let char of message){
      count[char]=(count[char] || 0) +1
     }
     for(let ch of letter){
      if(!count[ch]) return false
      count[ch]--
     }
     
    
    
  
  return true
  
}

console.log(constructNote('ab','abc'))

function findAlllDublicate(arr){
   
   let dublicateArr=[];
   let val={};
    
   for(let char of arr){
      
      val[char]=(val[char] || 0) +1
   }
   
   for(key in val){
      console.log(key)
      if(val[key]>1){
         dublicateArr.push(val[key])
         val[key]--
      }
   }
   return dublicateArr
}

console.log(findAlllDublicate([4, 3, 2, 7, 8, 2, 3])); // -> [2, 3]