// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// SOLUTION

function alternate(n, firstValue, secondValue) {
    let arr = [];

    for (i = 0; i < n; i++) {
        if (i % 2 === 0) {
            arr.push(firstValue);
        } else {
            arr.push(secondValue)
        }
    }
    return arr;
}

// Alt. Solutions
function alternate(n, firstValue, secondValue){
    const array = [];
    for (let i = 0; i < n; i++) {
      array.push(i % 2 === 0 ? firstValue : secondValue)
    }
    return array;