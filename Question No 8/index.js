function racePromises(promises) {
    return Promise.race(promises)
      .then(result => {
        // Promise resolved
        return { status: 'resolved', value: result };
      })
      .catch(error => {
        // Promise ç
        return { status: 'rejected', error };
      });
  }
  
  // Example usage:
  const promises = [
    new Promise((resolve, reject) => setTimeout(resolve, 100, 'First')),
    new Promise((resolve, reject) => setTimeout(reject, 50, 'Error')),
    new Promise((resolve, reject) => setTimeout(resolve, 200, 'Third'))
  ];
  
  racePromises(promises)
    .then(result => console.log(result)
