// // SUM OF THE FIRST NTH OF SERIES

// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// SOLUTION

function seriesSum(n) {
    if (n === 0) return '0.00'
    let result = 1
    for (let i = 4; i <= n * 3; i = i + 3) {
      result += 1 / i
    }
    return result.toFixed(2)
  }

  function SeriesSum(n) {
    let result = 0;
    let reverage = 1;
    for (let i = 0; i < n; i += 1) {
      if (i === 0) {
        result = 1;
      } else {
        reverage += 3;
        result = result + (1 / reverage);
      }
    }
    return result.toFixed(2);
  };

  function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    
    return s.toFixed(2)
  }