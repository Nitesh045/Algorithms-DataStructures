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
