
const Equipment = ({equipment}) => {
    const {itemName, image,categoryName, description, price,rating, customization, processingTime, stockStatus, seller_name} = equipment;
  
    console.log(equipment);
    return (
             <section
            className={` py-1 relative bg-purple-50 rounded-2xl transform duration-500 hover:-translate-y-2 cursor-pointer`}
          >
            <img className="rounded-t-2xl mx-auto" src={image} alt={itemName} />
            <div className=" px-5 space-y-5">
           < p className="absolute top-2 right-2 text-sm bg-purple-700  text-white border-2 border-purple-700 px-3 rounded-full">{categoryName}</p>
            <h1 className="text-2xl my-5">{itemName}</h1>
            <p className="mb-5">{description}</p>
            <h2 className="font-semibold mb-5">{price}</h2>
            </div>
           <div className="flex justify-center w-full items-center px-5 mb-5">
           <button
              className={`p-2 px-3 lg:px-6 text-center w-full  font-semibold text-white rounded-4xl bg-purple-800  hover:bg-purple-800`}
            >
              Add To Cart
            </button>
           </div>
          </section>
    );
};

export default Equipment;