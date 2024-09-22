async function fetchUserDataAndPosts(userId) {
    const userUrl = `https://api.example.com/users/${userId};`
    const postsUrl = `https:api.example.com/users/${userId}/posts;`
  
    try {
      // Fetch user details
      const userResponse = await fetch(userUrl);
      if (!userResponse.ok) {
        throw new Error(`Failed to fetch user details. Status: ${userResponse.status}`);
      }
      const userData = await userResponse.json();
  
      // Fetch user posts
      const postsResponse = await fetch(postsUrl);
      if (!postsResponse.ok) {
        throw new Error(`Failed to fetch user posts. Status: ${postsResponse.status}`);
      }
      const postsData = await postsResponse.json();
  
      // Return an object with user details and posts
      return {
        user: userData,
        posts: postsData
      };
    } catch (error) {
      console.error('Error fetching user data and posts:', error);
      throw error;
    }
  }
  
  // Example usage:
  fetchUserDataAndPosts(1)
    .then(({ user, posts }) => {
      console.log('User:', user);
      console.log('Posts:', posts);
    })
    .catch(error => {
      console.error('Error:', error);
    });