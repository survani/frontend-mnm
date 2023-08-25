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
        console.error('Error editing myth:', res.statusText);
        return;
    }

    const text = await res.text();
    
    if (text.length === 0) {
        alert('Myth edited successfully.');
        location.reload();
        console.log('Myth edited successfully.');
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

export default editMyth;