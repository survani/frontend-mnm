import { myth } from "../types/types";

const editMyth = async (id: number, updatedData: myth) => {
  try {
    const res = await fetch(`https://mnm-backend.onrender.com/myths/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!res.ok) {
      // Handle error response
      console.error("Error editing myth:", res.statusText);
      return;
    }

    const text: string = await res.text();
    if (text.length === 0) {
      console.info("Myth edited successfully.");
      location.reload();
      return;
    }

    const data = JSON.parse(text);
    console.log("Response data:", data);
    console.log("Myth edited successfully.");
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
};

export default editMyth;
