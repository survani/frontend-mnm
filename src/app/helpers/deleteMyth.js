const deleteMyth = async (id) => {
    const res = await fetch(`https://mnm-backend.onrender.com/myths/${id}`, {
        method: "DELETE",
    });

    if (!res.ok) {
        // Handle error response
        console.error('Error deleting myth:', res.statusText);
        return;
    }

    // Check for an empty response
    const text = await res.text();
    if (text.length === 0) {
        alert('Myth deleted successfully.');
        location.reload();
        console.log('Myth deleted successfully.');
        return;
    }

    // Parse the response as JSON
    try {
        const data = JSON.parse(text);
        console.log('Response data:', data);
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
};
export default deleteMyth;