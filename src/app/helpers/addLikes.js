const addLikes = async (updatedMyth, id) => {
    try {
      const response = await fetch(`https://mnm-backend.onrender.com/myths/${id}`, {
        method: 'PUT', // Use the appropriate HTTP method (POST)
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedMyth),
      });

      console.log('Response:', response);
  
      if (!response.ok) {
        throw new Error('Failed to add likes on the backend');
      }
  
      const responseData = await response.json();
      // Optionally, update your frontend state with the updated backend data
      // This depends on your specific state management setup
    } catch (error) {
      console.error('Error adding likes:', error);
    }
  };

  export default addLikes;