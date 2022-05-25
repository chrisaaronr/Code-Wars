// Reduce but Grow

// Given a non-empty array of integers, return the result of multiplying the values together in order. 

// SOLUTION

const grow = x => {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
      res *= x[i];
    }
    return res;
  };