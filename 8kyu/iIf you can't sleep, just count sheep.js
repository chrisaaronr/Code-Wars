// IF YOU CANT SLEEP, JUST COUNT SHEEP!

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


// SOLUTION
// create an array of numbers, build a for loop
let countSheep = function (num) {
    let sheepArray = [];
    
    for (let i = 1; i <= num; i++) {
        let sheepCount = `${i} sheep...`
    sheepArray.push(sheepCount)
    }

    return sheepArray.join('')
}