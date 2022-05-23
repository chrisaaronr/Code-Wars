// DESCENDING ORDER

//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// P:
// R:
// E:  Input: 42145, non-negative, ; Output: 54421
// P:

// SOLUTION
const descendingOrder = n =>
  Number(
    String(n)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  )

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

function descendingOrder(n){
    return parseInt(n.toString().split('').sort().reverse().join(''), 10);
  }