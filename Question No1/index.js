function sumAsync(a, b, callback) {
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 1000);
  }
  
  // Example usage:
  sumAsync(5, 3, (result) => {
    console.log('Sum:', result); // Should log 'Sum: 8' after 1 second
  });