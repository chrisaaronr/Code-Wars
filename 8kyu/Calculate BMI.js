// Calculate BMI

//KATA TRAINING
/* Write a function BMI that calculates body mass index (bmi = weight / height^2).

If bmi <= 18.5 return "Underweight"

If bmi <= 25.0 return "normal"

If bmi <= 30.0 return "Overweight"

If bmi > 30 return "Obese" */


// SOLUTION

function bmi(weight, height) {
    let x = weight / (height ** 2);

    if (x < 18.6) {
        return "Underweight";
    } else if (x > 18.5 && x <= 25) {
        return "Normal";
    } else if (x > 25 && x <= 30) {
        return "Overweight";
    } else {
        return "Obese"
    }
}