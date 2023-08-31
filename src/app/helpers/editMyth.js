import ListUI from "../components/cards/myth-list/ListUI";

const editMyth = async (id, updatedData) => {
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

  const text = await res.text();

  if (text.length === 0) {
    console.info("Myth edited successfully.");
    location.reload();
    return;
  }

  // Parse the response as JSON
  try {
    const data = JSON.parse(text);
    console.log("Response data:", data);
    console.log("Myth edited successfully.");
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
};

export default editMyth;
