import { Link } from "react-router-dom";
import { FaStar, FaDollarSign } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";

const Equipment = ({ equipment }) => {
  const { _id, itemName, image, categoryName, price, rating } = equipment;

  return (
    <tr className="hover:bg-purple-50  dark:hover:bg-gray-800 transition flex text-left   gap-2 justify-between">
      <td className="p-3">
        <img
          src={image}
          alt={itemName}
          className="w-16 h-16 object-cover rounded"
        />
      </td>
      <td className="p-3 lg:w-[200px]  font-semibold text-gray-800 dark:text-gray-200">
        {itemName}
      </td>
      <td className="p-3 lg:w-[150px] text-left text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
        <MdOutlineCategory /> {categoryName}
      </td>
      {/* <td className="p-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-2  ">{description}</td> */}
      <td className="p-3 lg:[100px]  text-left text-green-600 dark:text-green-400 font-semibold flex items-center gap-1">
        <FaDollarSign /> {price}
      </td>
      <td className="p-3 text-yellow-500 font-medium flex items-center gap-1">
        <FaStar /> {rating}
      </td>
      <td className="p-3">
        <Link
          to={`/equipments/${_id}`}
          className="bg-purple-700 hover:bg-purple-800 text-white text-sm px-3 py-1.5 rounded-xl font-medium"
        >
          View
        </Link>
      </td>
    </tr>
  );
};

export default Equipment;
