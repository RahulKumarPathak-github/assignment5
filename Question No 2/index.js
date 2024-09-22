function getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched successfully.");
      }, 2000); // 2 seconds
    });
  }
  
  // Example usage:
  getData().then((message) => {
    console.log(message); // Outputs: Data fetched successfully.
  });