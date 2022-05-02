// // FIND THE ODD INT

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// // SOLUTION
function findOdd(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        let counter = 0

        for (const newElement of array) {
            if (newElement === element) counter++
        }

        if (counter % 2 !== 0) return element
    }
}



function findOdd(A) {
    //happy coding!
    return 0;
}