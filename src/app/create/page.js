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
    <section>
      <h1 className="text-4xl text-center mt-24">Create a Myth</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center mt-10"
      >
        <label>Title</label>
        <input
          type="text"
          name="title"
          {...register("title", { required: true })}
          placeholder={"Title"}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          {...register("description", { required: true })}
          placeholder={"Description"}
        />

        <label>Topic</label>
        <input
          type="text"
          name="topic"
          {...register("topic", { required: true })}
          placeholder={"Topic"}
        />

        <label>Date</label>
        <input
          type="datetime-local"
          name="content"
          {...register("publishedDate", { required: true })}
          placeholder={"Content"}
          className="text-black"
        />

        <label>Image URL</label>
        <input
          type="text"
          name="imageUrl"
          {...register("imageUrl", { required: true })}
          placeholder={"Image URL"}
        />

        <label>Fact</label>
        <input
          type="text"
          name="fact"
          {...register("fact", { required: true })}
          placeholder={"Fact"}
        />
        <label>Featured</label>
        <input
          type="checkbox"
          name="featured"
          {...register("featured", { required: true })}
        />

        <textarea
          {...register("content")}
          rows="5"
          cols="50"
          placeholder="Content"
        />

        {/* Add other input fields here */}

        <button className="bg-red-500 border-2 p-3 mt-5 rounded" type="submit">
          Submit
        </button>
        <input type="reset" value="Reset" />
      </form>
    </section>
  );
};
export default CreateMyths;
