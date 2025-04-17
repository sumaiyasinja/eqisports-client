import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UpdateEquipment = () => {
  const { id } = useParams();
  const loadedEquipment = useLoaderData();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: loadedEquipment,
  });

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/equipments/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(result => {
        if (result.modifiedCount > 0) {
          toast.success("Equipment updated successfully!");
        } else {
          toast.info("No changes made.");
        }
      })
      .catch(error => {
        toast.error("Something went wrong!");
        console.error(error);
      });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <ToastContainer position="top-center" />
      <h2 className="text-2xl font-bold mb-4">Update Equipment</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("itemName", { required: true })}
          placeholder="Item Name"
          className="input w-full"
        />
        {errors.itemName && <p className="text-red-500">Item name is required</p>}

        <input
          {...register("image", { required: true })}
          placeholder="Image URL"
          className="input w-full"
        />
        {errors.image && <p className="text-red-500">Image is required</p>}

        <input
          {...register("categoryName", { required: true })}
          placeholder="Category"
          className="input w-full"
        />
        {errors.categoryName && <p className="text-red-500">Category is required</p>}

        <textarea
          {...register("description", { required: true })}
          placeholder="Description"
          className="input w-full"
        />
        {errors.description && <p className="text-red-500">Description is required</p>}

        <input
          type="number"
          {...register("price", { required: true })}
          placeholder="Price"
          className="input w-full"
        />
        {errors.price && <p className="text-red-500">Price is required</p>}

        <input
          type="number"
          step="0.1"
          {...register("rating", { required: true })}
          placeholder="Rating"
          className="input w-full"
        />
        {errors.rating && <p className="text-red-500">Rating is required</p>}

        <input
          {...register("customization", { required: true })}
          placeholder="Customization"
          className="input w-full"
        />
        {errors.customization && <p className="text-red-500">Customization is required</p>}

        <input
          {...register("processingTime", { required: true })}
          placeholder="Processing Time"
          className="input w-full"
        />
        {errors.processingTime && <p className="text-red-500">Processing Time is required</p>}

        <input
          type="number"
          {...register("stockStatus", { required: true })}
          placeholder="Stock Status"
          className="input w-full"
        />
        {errors.stockStatus && <p className="text-red-500">Stock Status is required</p>}

        <button type="submit" className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition">
          Update Equipment
        </button>
      </form>
    </div>
  );
};

export default UpdateEquipment;
