// // TWO to ONE

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// SOLUTION

function longest(s1, s2) {
    const a = s1.split('')
    const b = s2.split('')
  
    return [...new Set([...a, ...b])].sort().join('')
  }