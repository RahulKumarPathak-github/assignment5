async function fetchData(url) {
    try {
      // Fetch data from the URL
      const response = await fetch(url);
  
      // Check if the response is OK (status in the range 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse the JSON from the response
      const data = await response.json();
      
      // Return the parsed JSON data
      return data;
    } catch (error) {
      // Handle and throw errors
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  
  // Example usage:
  fetchData('https://api.example.com/data')
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));