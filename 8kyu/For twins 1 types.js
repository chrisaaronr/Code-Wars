/*
8 kyu - For Twins 1. Types

Task:
Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

Examples:
42, "number"   --> true
"42", "number" --> false

Solution:
*/

function typeValidation(variable, type) {
    return typeof variable === type
}