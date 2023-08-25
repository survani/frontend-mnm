const addLikes = (likes, id) => {
    const res = fetch(`https://mnm-backend.onrender.com/myths/${id}`, {
        method: "PUT",
        body: JSON.stringify({
        likes: likes + 1
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    });
    return res;

 };
export default addLikes;