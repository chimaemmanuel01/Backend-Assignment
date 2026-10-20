let count = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {count ++;}
}
console.log(count); 


// square sum of numbers in an array
function squareSum (numbers) {
let squareSum = 0;
for (let i = 0; i < numbers.length; i++) {
    squareSum += numbers[i] * numbers[i];
}
return squareSum;
}
console.log(squareSum([1, 2, 2]));