// EVEN OR ODD

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// SOLUTION

function evenOrOdd (number) {
    if (number % 2 === 0) {
        return "Even";
    } else (number % 3 ===0) {
        return "Odd";
    }
}