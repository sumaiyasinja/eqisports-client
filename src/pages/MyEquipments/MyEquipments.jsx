import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipments = () => {
  const equipments = useLoaderData(); 
  console.log(equipments);

  const handleDelete = async (id) => {
    console.log("Deleting:", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch (`https://sports-equipment-shop-server.vercel.app/equipments/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Delete response:", data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your equipment has been deleted.",
                icon: "success"
              });
            } else {
              Swal.fire({
                text: "Failed to delete equipment.",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting equipment:", error);
          }
        )
       
      }
    });
    
    
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-6">My Added Equipment</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 text-left">
          <thead className="bg-gray-100 dark:bg-gray-700 dark:text-white">
            <tr>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Item Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Stock</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {equipments.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="px-4 py-2">
                  <img src={item.image} alt={item.itemName} className="w-16 h-16 object-cover rounded" />
                </td>
                <td className="px-4 py-2">{item.itemName}</td>
                <td className="px-4 py-2">{item.categoryName}</td>
                <td className="px-4 py-2">${item.price}</td>
                <td className="px-4 py-2">{item.stockStatus}</td>
                <td className="px-4 py-2">{item.rating}⭐</td>
                <td className="px-4 py-2 space-x-2 flex items-center flex-col gap-2 justify-start">
                  <Link
                    to={`/equipments/update/${item._id}`}
                    className="flex items-center cursor-pointer justify-center rounded-md bg-purple-800 hover:bg-white hover:text-purple-800 text-white px-6 gap-2 py-2 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
                    >
                    <FaEdit /> Update
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="flex items-center cursor-pointer justify-center rounded-md bg-red-600 text-white hover:text-red-600 hover:bg-white px-6 gap-2 py-2   font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEquipments;
