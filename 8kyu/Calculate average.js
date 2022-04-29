//Calculate average

//Write a function which calculates the average of the numbers in a given list.
//Empty arrays should return 0.

//SOLUTION
function find_average(array) {
    const sum = Number(array.reduce( (a, b) => a + b, 0 ));    
    const totalItems = array.length;
    return sum / totalItems
}

function find_average(array) {
    return array.reduce((a, b) => a + b, 0) / array.length;
  }