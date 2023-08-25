"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const CreateMyths = () => {
  const { register, handleSubmit, errors } = useForm();

  const router = useRouter();
  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://mnm-backend.onrender.com/myths", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        router.push(`/`);
        console.log("Response:", responseData);
      } else {
        console.error("Request failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
<section className="mt-28">
  <h1 className="mb-8 text-4xl font-bold text-center text-white">Create a Myth</h1>
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="max-w-md p-8 mx-auto bg-white rounded-lg shadow-md"
  >
    <label className="text-gray-700">Title</label>
    <input
      type="text"
      name="title"
      {...register("title", { required: true })}
      placeholder="Title"
      className="w-full p-2 mt-1 border border-gray-300 rounded"
    />

    <label className="mt-4 text-gray-700">Description</label>
    <input
      type="text"
      name="description"
      {...register("description", { required: true })}
      placeholder="Description"
      className="w-full p-2 mt-1 border border-gray-300 rounded"
    />

    <label className="mt-4 text-gray-700">Topic</label>
    <input
      type="text"
      name="topic"
      {...register("topic", { required: true })}
      placeholder="Topic"
      className="w-full p-2 mt-1 border border-gray-300 rounded"
    />

    <label className="mt-4 text-gray-700">Date</label>
    <input
      type="datetime-local"
      name="content"
      {...register("publishedDate", { required: true })}
      className="w-full p-2 mt-1 border border-gray-300 rounded"
    />

    <label className="mt-4 text-gray-700">Image URL</label>
    <input
      type="text"
      name="imageUrl"
      {...register("imageUrl", { required: true })}
      placeholder="Image URL"
      className="w-full p-2 mt-1 border border-gray-300 rounded"
    />

    <label className="mt-4 text-gray-700">Fact</label>
    <input
      type="text"
      name="fact"
      {...register("fact", { required: true })}
      placeholder="Fact"
      className="w-full p-2 mt-1 border border-gray-300 rounded"
    />

    <label className="flex items-center mt-4 text-gray-700">
      <input
        type="checkbox"
        name="featured"
        {...register("featured", { required: false })}
        className="mr-2"
      />
      Featured
    </label>

    <label className="mt-4 text-gray-700">Content</label>
    <textarea
      {...register("content")}
      rows="5"
      placeholder="Content"
      className="w-full p-2 mt-1 border border-gray-300 rounded"
    />

    <div className="flex justify-between mt-6">
      <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring">
        Submit
      </button>
      <input
        type="reset"
        value="Reset"
        className="px-4 py-2 border rounded hover:bg-gray-200 focus:outline-none focus:ring"
      />
    </div>
  </form>
</section>

  );
};
export default CreateMyths;
