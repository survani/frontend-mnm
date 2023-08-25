import { useForm } from "react-hook-form";

const MythUpdateModal = ({ item, onClose, onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="w-1/2 p-6 bg-white border border-gray-300 rounded-lg">
        <span
          className="text-xl font-bold text-black cursor-pointer"
          onClick={onClose}
        >
          X
        </span>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block mb-1 text-black">Title</label>
          <input
            {...register("title")}
            defaultValue={item.title}
            className="w-full px-2 py-1 mb-4 text-black border rounded"
          />

          <label className="block mb-1 text-black">Description</label>
          <input
            {...register("description")}
            defaultValue={item.description}
            className="w-full px-2 py-1 mb-4 text-black border rounded"
          />

          <label className="block mb-1 text-black">Topic</label>
          <input
            {...register("topic")}
            defaultValue={item.topic}
            className="w-full px-2 py-1 mb-4 text-black border rounded" 
          />

          <label className="block mb-1 text-black">imageUrl</label>
          <input {...register("imageUrl")} defaultValue={item.imageUrl} className="w-full px-2 py-1 mb-4 text-black border rounded" />

          <label className="block mb-1 text-black">Content</label>
          <input {...register("content")} defaultValue={item.content} className="w-full px-2 py-1 mb-4 text-black border rounded" />

          <label className="block mb-1 text-black">fact</label>
          <input {...register("fact")} defaultValue={item.fact} className="w-full px-2 py-1 mb-4 text-black border rounded" />

          <label className="block mb-1 text-black">Featured</label>
          <input
            type="checkbox"
            name="featured"
            {...register("featured", { required: false })}
            className="w-full text-black"
          />

          {/* Add more fields as needed */}

          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            Update Myth
          </button>
        </form>
      </div>
    </div>
  );
};

export default MythUpdateModal;
