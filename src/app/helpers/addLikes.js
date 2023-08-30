const addLikes = async (updatedMyth, id) => {
    try {
      const response = await fetch(`https://mnm-backend.onrender.com/myths/${id}`, {
        method: 'PUT', // Use the appropriate HTTP method (PUT)
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedMyth),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add likes on the backend');
      }
  
      const responseData = await response.json();
      // Optionally, update your frontend state with the updated backend data
      // This depends on your specific state management setup
      return responseData;
    } catch (error) {
      console.error('Error adding likes:', error);
    }
  };

  export default addLikes;