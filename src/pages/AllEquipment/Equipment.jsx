import { Link } from "react-router-dom";

const Equipment = ({equipment}) => {
    const {itemName, image,categoryName, description, price,rating, customization, processingTime, stockStatus, seller_name} = equipment;
  
    console.log(equipment);
    return (
      <div>
        
      </div>
          //    <section
          //   className={` py-1 relative flex justify-around   bg-purple-50 rounded-2xl transform duration-500 hover:-translate-y-2 cursor-pointer`}
          // >
          //   <div className="">          
          //     <img className="rounded-2xl  mx-auto h-50" src={image} alt={itemName} />
          //   </div>
          //   <div className="  flex flex-col justify-between items-start px-2">
          //   <div className=" space-y-5">
          //  < p className="absolute top-2 left-2 text-sm bg-purple-700  text-white border-2 border-purple-700 px-3 rounded-full">{categoryName}</p>
          //   <h1 className="text-xl my-2">{itemName}</h1>
          //   <p className="mb-2">{description}</p>
          //   <h2 className="font-semibold mb-2">{price}</h2>
          //   </div>
          //  <div className="flex justify-center w-full items-center px-5 mb-5">
          //  <Link to={`/equipment/${equipment._id}`}
          //     className={`p-2 px-3 lg:px-6 text-center w-full  font-semibold text-white rounded-4xl bg-purple-800  hover:bg-purple-800`}
          //   >
          //    View Details
          //   </Link>
          //  </div>
          //   </div>
            
          // </section>
    );
};

export default Equipment;