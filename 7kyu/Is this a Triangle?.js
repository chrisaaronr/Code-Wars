// Is this a Triangle?

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c){
    const perimeter = (a + b + c) / 2;
    const area = Math.sqrt(
        perimeter *
            (perimeter - a) *
            (perimeter - b) *
            (perimeter - c)
    );
    if (Number.isNaN(area)) return false;

    return area > 0
}

