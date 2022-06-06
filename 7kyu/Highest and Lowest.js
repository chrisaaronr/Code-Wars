// HIGHEST AND LOWEST

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// SOLUTION
function highAndLow(numbers) {
    const orderedNumbers = numbers.split(' ').map(string => Number(string))
    return `${Math.max(...orderedNumbers)} ${Math.min(...orderedNumbers)}`
  }