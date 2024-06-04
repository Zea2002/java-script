function findUnique(array)
 {
    return Array.from(new Set(array));
}

// Example usage
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var uniqueValues = findUnique(numbers);

console.log("Unique values in the array:", ...uniqueValues);
