function findMax(array)
 {
    return Math.max(...array);
}

// Example usage
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var maxValue = findMax(numbers);

console.log("Maximum value in the array:", maxValue);
