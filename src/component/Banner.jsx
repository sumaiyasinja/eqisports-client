import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const slides = [
    {
      id: 1,
      image:
        "https://i.ibb.co.com/qLfQmJ3d/konstantin-evdokimov-JP0qi-WQzjrg-unsplash.jpg",
      title: "Gear Up for Greatness",
      subtitle: "Premium Sports Equipment for Every Athlete",
    },
    {
      id: 2,
      image:
      "https://i.ibb.co.com/h1fV3xVN/2151207884.jpg",
      title: "Unleash Your Inner Champion",
      subtitle: "Top-Quality Gear for Peak Performance",
    },
    // {
    //   id: 3,
    //   image:
    //     "https://images.unsplash.com/photo-1571019613914-85f342c1d4b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    //   title: "Train Hard. Play Harder.",
    //   subtitle: "Durable Training Gear to Power Your Practice",
    // },
    {
      id: 3,
      image:
        "https://i.ibb.co.com/ymRnNKgF/julius-carmine-Eg4g-K0-YU124-unsplash.jpg",
      title: "Every Sport. Every Season.",
      subtitle: "One Stop Shop for All Sports Essentials",
    },
  ];

  return (
    <div className="sliderAx h-auto">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`container mx-auto transition-opacity duration-500 ${
            activeSlide === index ? "block" : "hidden"
          }`}
        >
          <div
            className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="md:w-1/2">
              <p className="font-bold text-sm uppercase">EquiSports</p>
              <p className="text-xl md:text-3xl font-bold">{slide.title}</p>
              <p className="text-lg md:text-2xl mb-10 leading-none">{slide.subtitle}</p>
              {/* <a
                href="#"
                className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
              >
                Shop Now
              </a> */}
              <Link to="/allEquipment" className=" rounded-md uppercase bg-purple-800 hover:bg-white hover:text-purple-800 text-white py-4 px-8 text-xs font-bold hover:shadow-lg hover:drop-shadow transition duration-200">
              Shop Now
              </Link>
            </div>
          </div>
          <br />
        </div>
      ))}

      <div className="flex justify-between w-20 mx-auto pb-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full w-4 h-4 mx-1 ${
              activeSlide === index ? "bg-purple-800" : "bg-purple-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
