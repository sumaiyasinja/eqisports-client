import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Title from './Title';

const faqs = [
  {
    question: "What types of sports equipment do you offer?",
    answer:
      "We offer a wide range of high-quality equipment for fitness, football, basketball, tennis, yoga, outdoor adventure, and more.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes! We ship worldwide. Delivery times and fees depend on your location, and we ensure safe and timely shipping with trusted carriers.",
  },
  {
    question: "How do I choose the right size for gear like shoes or protective wear?",
    answer:
      "Each product page includes product details. If you're unsure, contact our support team — we’re happy to help you pick the right fit.",
  },
  {
    question: "Can I return or exchange items?",
    answer:
      "Absolutely. We offer a 14-day hassle-free return and exchange policy. Items must be unused and in original packaging.",
  },
  {
    question: "Do you offer discounts or promotions?",
    answer:
      "Yes! Subscribe to our newsletter or follow us on social media for the latest deals, seasonal sales, and exclusive promotions.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="  py-4  my-5 md:py-9 md:my-10  mx-auto rounded-2xl ">
      <Title title="❓ Frequently Asked Questions"></Title>
      <div className="space-y-6">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-purple-100 border border-gray-200 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-gray-800 focus:outline-none"
              >
                <span>{faq.question}</span>
                {isOpen ? (
                  <FaChevronUp className="w-4 h-4 text-gray-600" />
                ) : (
                  <FaChevronDown className="w-4 h-4 text-gray-600" />
                )}
              </button>

              <div
                className={`px-6 pb-5 text-gray-600 text-base overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="mt-2">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
