/* 8 kyu - Reversed Words

Complete the solution so that it reverses all of the words within the string passed in.

*/

function reverseWords(str){
    let splitString = str.split(' ');
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join(' ');

    return joinArray
  }