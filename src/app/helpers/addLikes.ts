import myth from "../types/types";

const addLikes = async (updatedMyth: myth, id: number ) => {
  try {
    const res = await fetch(`https://mnm-backend.onrender.com/myths/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMyth), // Send only the "likes" property
    });
  
    if (!res.ok) {
      // Handle error response
      console.error("Error liking myth:", res.statusText);
      return;
    }
  
    const text: string = await res.text();
    if (text.length === 0) {
      console.info("Myth liked successfully.");
      location.reload();
      return;
    }

    const data = JSON.parse(text);
    console.log("Response data:", data);
    console.log("Myth liked successfully.");
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
};

export default addLikes;