'use client'
import Image from "next/image";
import { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";



const CustomerTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const Customer = [
    {
      id: 1,
      name: "Said Mazouz",
      job: "Verified Customer",
      avatar: "/avatar.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
    },
    {
      id: 2,
      name: "Said zob",
      job: "Verified Customer",
      avatar: "/avatar.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
    },
    {
      id: 3,
      name: "Said alm9awad",
      job: "Verified Customer",
      avatar: "/avatar.png",

      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
    },
    {
      id: 4,
      name: "Said Mazouz",
      job: "Verified Customer",
      avatar: "/avatar.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
    }
  ]
  return (
    <div className="flex flex-col gap-4">
      <div className="container mx-auto rounded-xl bg-blue-400 shadow-lg">
        <div className="flex flex-col items-center text-center gap-12 p-8 md:p-16">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              What Our Customers Are Saying
            </h1>
            <div className="w-16 h-[3px] bg-white rounded-full"></div>
          </div>

          <div className="w-full flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex gap-6 items-center rounded-lg p-6 bg-white shadow-md w-full md:w-[45%]">
              <Image
                src={Customer[currentIndex].avatar}
                alt="Customer Avatar"
                width={80}
                height={80}
                className="rounded-full border-2 border-blue-600"
              />
              <div className="text-left">
                <h2 className="text-xl font-semibold text-blue-800">{Customer[currentIndex].name}</h2>
                <p className="text-gray-600 text-sm mt-1">{Customer[currentIndex].job}</p>
              </div>
            </div>

            <div className="w-full md:w-[45%] flex items-center">
              <p className="text-lg text-gray-100 leading-relaxed">
                {Customer[currentIndex].text}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center  text-blue-500">
        <div className="flex justify-center gap-4 items-center">
          <button
            onClick={() => {
              setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? Customer.length - 1 : prevIndex - 1
              );
            }}
          >
            <GrFormPreviousLink className="text-4xl" />
          </button>
          {Customer.map((customer, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`${currentIndex === index ? "bg-blue-500" : "bg-gray-300 text-blue-500"
                } rounded-full w-2 h-2 flex items-center justify-center`}
            >

            </span>
          ))}
          <button
            onClick={() => {
              setCurrentIndex((prevIndex) =>
                prevIndex === Customer.length - 1 ? 0 : prevIndex + 1
              );
            }}
          >
            <GrFormNextLink className="text-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export { CustomerTestimonials };
