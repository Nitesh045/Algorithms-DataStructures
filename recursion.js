function findOdd(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput.length % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.splice(1));
  }
  helper(arr);
  return result;
}

console.log(findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));


function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(2, 0)); // Output: 8


// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr){
    
    let product =1;
    
    function helper(input){
        if(input.length===0) return 1;
        
        product *= input[0]
        
        helper(input.splice(1))
    }
   
   helper(arr)
   return product
    
}

console.log(productOfArray([1,2,3])); // 6



// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
   if(num<= 0) return 0;
   
  return num + recursiveRange(num -1)
}

console.log(recursiveRange(6)); // 21

// fib(4) // 3

function fib(num){
   if(num <= 2) return 1; 
   return fib(num - 1) + fib(num - 2)
}

console.log(fib(35)); // 3

function reverse(str){
  // add whatever parameters you deem necessary - good luck!
  if(str.length === 0) return '';
  return str[str.length -1] + reverse(str.slice(0, -1))
  
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'



function isPalindrome(str){
  if(str.length === 1) return true;
  helper = (str) => {
    if(str.length === 0) return true;
    if(str[0] !== str[str.length -1]) return false;
    return helper(str.slice(1, -1))
  }

  return helper(str)
}






//Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

function someRecursive(arr, callback){
  if(arr.length === 0) return false;
  if(callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback)
}


console.log(someRecursive([1,2,3,4], val => val % 2 === 0)); // true
console.log(someRecursive([1,3,5], val => val % 2 === 0)); // false



function flatten(oldArr){
  let newArr = [];
  for(let i = 0; i < oldArr.length; i++){
    if(Array.isArray(oldArr[i])){
      newArr = newArr.concat(flatten(oldArr[i]))
    }else{
      newArr.push(oldArr[i])
    }
  }
  return newArr;
}