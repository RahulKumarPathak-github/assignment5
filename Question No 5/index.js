function multiplyWithCallback(numbers, callback) {
    // Multiply each number in the array by 2
    const result = numbers.map(number => number * 2);
    
    // Pass the result to the callback function
    callback(result);
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4];
  multiplyWithCallback(numbers, (result) => {
    console.log(result); // Outputs: [2, 4, 6, 8]
  });