
const EquipmentCard = ({equipment}) => {
    const {itemName, image,categoryName, description, price,rating, customization, processingTime, stockStatus, seller_name} = equipment;
    return (
        <div className="max-w-sm bg-white rounded-lg shadow-lg hover:shadow-gray-200 transition  dark:bg-gray-700">
        <div>
          <img
            className=" rounded-lg max-h-64 w-full py-4  mx-auto"
            src={image}
            alt={itemName}
          />
        </div>

        <div className="flex flex-col gap-1 mt-4 px-4">
          <h2 className="text-lg  hover:underline font-semibold text-purple-800 dark:text-gray-50">{itemName}</h2>
          <p className="text-black-400 dark:text-gray-50 ">Price: <span className=" dark:text-black-50">${price}</span></p>
          <p className="  text-black-400 dark:text-gray-50">Stock: {stockStatus}</p>
          <p className="  text-black-400 dark:tgray-50">Seller: {seller_name}</p>
        </div>

        <div className="flex gap-1 mt-4 px-4">
          <span className="sr-only">Rating</span>
         <span className="text-yellow-500">{rating}</span> <span className="text-yellow-500">★</span>

          
        </div>

        <div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
          <button className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
            <span className="text-base">View details</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
    );
};

export default EquipmentCard;