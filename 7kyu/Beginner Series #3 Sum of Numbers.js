// Beginner Series #3 Sum of Numbers

// // Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// // Note: a and b are not ordered!

function getSum (a, b){

}

function getSum(...range) {
    const rangeSort = range.sort((a, b) => a - b)
    if (rangeSort[0] === rangeSort[1]) return rangeSort[0]
  
    let result = 0
    for (let i = rangeSort[0]; i <= rangeSort[1]; i++) result += i
  
    return result
  }