import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const MyEquipments = () => {
  const equipments = useLoaderData(); // this is an array
  console.log(equipments);

  const handleDelete = async (id) => {
    console.log("Deleting:", id);
    // You can integrate DELETE API logic here
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
                <td className="px-4 py-2 space-x-2">
                  <Link
                    to={`/equipments/update/${item._id}`}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 flex items-center gap-1"
                  >
                    <FaEdit /> Update
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 flex items-center gap-1"
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
