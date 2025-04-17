import React, { useEffect, useState, useRef } from "react";

const images = [
  {
    src: "https://i.ibb.co.com/JjJDRyVL/badminton-player.jpg",
    title: "Badminton Power",
    desc: "Swift moves and sharp smashes define this thrilling court battle.",
  },
  {
    src: "https://i.ibb.co.com/fVZs9mhT/football-soccer-player.jpg",
    title: "Soccer Spirit",
    desc: "Passion meets precision on the football field.",
  },
  {
    src: "https://i.ibb.co.com/dsPYK4cn/rugby.jpg",
    title: "Rugby Rush",
    desc: "Intensity, grit, and speed collide in the game of rugby.",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoAdvanceRef = useRef(null);

  const updateSlide = (index) => {
    setCurrentSlide(index);
    resetAutoAdvance();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    resetAutoAdvance();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    resetAutoAdvance();
  };

  const resetAutoAdvance = () => {
    clearInterval(autoAdvanceRef.current);
    autoAdvanceRef.current = setInterval(nextSlide, 5000);
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  useEffect(() => {
    autoAdvanceRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(autoAdvanceRef.current);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden z-20">
        <div
          className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / images.length) * 100}%` }}
        ></div>
      </div>

      {/* Carousel */}
      <div
        className="relative overflow-hidden h-[400px] sm:h-[500px] md:h-[600px]"
        onTouchStart={(e) => (touchStartX.current = e.changedTouches[0].screenX)}
        onTouchEnd={(e) => {
          touchEndX.current = e.changedTouches[0].screenX;
          handleSwipe();
        }}
      >
        {images.map((item, idx) => {
          const isActive = idx === currentSlide;
          const isPrev = idx === (currentSlide - 1 + images.length) % images.length;
          const isNext = idx === (currentSlide + 1) % images.length;

          let className = "carousel-item absolute top-0 left-0 w-full h-full transition-all duration-500";

          if (isActive) className += " opacity-100 z-10 scale-100";
          else if (isPrev) className += " opacity-70 scale-90 -translate-x-full z-0";
          else if (isNext) className += " opacity-70 scale-90 translate-x-full z-0";
          else className += " opacity-0 scale-90 translate-x-0 hidden";

          return (
            <div key={idx} className={className}>
              <div className="w-full h-full p-4 sm:p-8">
                <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20 mix-blend-overlay" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="nav-button absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="nav-button absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => updateSlide(idx)}
            className={`w-8 sm:w-12 h-1 sm:h-1.5 rounded-full transition-colors ${
              idx === currentSlide ? "bg-white/40" : "bg-white/20"
            } hover:bg-white/60`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
