async function fetchMultipleData(urls) {
    try {
      // Create an array of fetch promises
      const fetchPromises = urls.map(url => fetch(url));
  
      // Wait for all fetch promises to resolve
      const responses = await Promise.all(fetchPromises);
  
      // Convert all responses to JSON (or any other format as needed)
      const data = await Promise.all(responses.map(response => response.json()));
  
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error to handle it further up the chain if necessary
    }
  }
  
  // Example usage:
  const urls = ['https://api.example.com/data1', 'https://api.example.com/data2'];
  fetchMultipleData(urls)
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));