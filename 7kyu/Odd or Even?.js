// ODD OR EVEN?

/*Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

*/

//SOLUTION
/*
P: array of numbers (arr); +, -, whole
R: sum of elements; sum is even or odd
E: Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
P:
*/

function oddOrEven (array) {
    const sum = array.reduce((total, value) => total + value, 0);

    if (sum % 2 === 0){
        return "even"
    } else {
        return "odd"
    }
}