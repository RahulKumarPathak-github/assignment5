async function fetchData(url) {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  
  // Example usage:
  fetchData('https://api.example.com/data')
    .then(data => {
      console.log(data); // Outputs the parsed JSON response
    })
    .catch(error => {
      console.error('Error:', error);
    });