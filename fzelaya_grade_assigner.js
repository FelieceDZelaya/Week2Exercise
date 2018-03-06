// Create 2 functions that calculate properties of a circle, using
// the definitions here
// http://math2.org/math/geometry/circles.htm
// Create a function called calcCircumfrence:
// 	 •	 Pass the radius to the function.
// 	 •	 Calculate the circumference based on the radius, and output "The
// circumference is NN".
// Create a function called calcArea:
// 	 •	 Pass the radius to the function.
// 	 •	 Calculate the area based on the radius, and output "The area is NN".

function calcCircumfrence(radius) {

    var circrum = 2 * Math.PI * radius;
    return `The circumference is ${circrum}`;
}

console.log(calcCircumfrence(5));

function calcArea(radius) {

    var area = Math.PI * Math.pow(radius,2);
    return `The area is ${area}`;
}

console.log(calcArea(5));
