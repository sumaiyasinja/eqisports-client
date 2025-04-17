import { motion } from "framer-motion";
import Title from './Title';

const testimonials = [
    {
      quote:
        "I ordered a pair of resistance bands and a yoga mat—amazing quality! Everything feels premium and durable. Great for my home workouts!",
      name: "Emily Watson",
      title: "Fitness Trainer",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "Got a full cricket kit for my son—super fast delivery and everything was exactly as described. Will definitely be ordering again.",
      name: "Rahul Sen",
      title: "Parent & Coach",
      img: "https://randomuser.me/api/portraits/men/48.jpg",
    },
    {
      quote:
        "The treadmill I bought is fantastic. Easy to set up and runs smoothly. This shop has the best sports gear selection online!",
      name: "Samantha Lee",
      title: "Marathon Runner",
      img: "https://randomuser.me/api/portraits/women/25.jpg",
    },
  ];
  

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function TestimonialSection() {
  return (
    <div className="border-2 border-purple-200 py-4 px-4 md:px-8 md:pt-16 md:my-8 mx-auto rounded-2xl ">
        <Title title="What Our Customers Say"  />
        <p className="text-center text-gray-600 ">We care about our customers experience. Tell us what your thoughts.</p>
          <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-2xl p-8 text-white"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12"></div>
          <div className="relative z-10">
            <svg
              className="w-12 h-12 mb-4 text-purple-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl font-medium mb-4">"{t.quote}"</p>
            <div className="flex items-center">
              <img
                src={t.img}
                alt={t.name}
                className="w-12 h-12 rounded-full mr-4 border-2 border-purple-300"
              />
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-purple-200">{t.title}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    </div>
  
  );
}
