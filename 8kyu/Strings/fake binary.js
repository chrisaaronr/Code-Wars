// FAKE BINARY

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// SOLUTION
function fakeBin(x) {
    // separate each character of the string into an array
    const arrayOfStrings = x.split('');
    // in each array element, check digit if it's < or >= 5; replace with 1 or 2
    const replace = arrayOfStrings.map(num => (Number(num) >= 5 ? 1 : 0);
    // join array into a string
    return replace.join('')
}

/*
P: string of digits
R: character < 5 with '0' , character >= 5 with '1'; 12345 --> [1, 2, 3, 4, 5]
E: 12345678 --> 00001111
P: 
*/
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}


const fakeBin = x =>
  x
    .split('')
    .map(num => (Number(num) >= 5 ? 1 : 0))
    .join('')