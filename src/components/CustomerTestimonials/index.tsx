import Image from "next/image";

const CustomerTestimonials = () => {
  return (
    <div className="container mx-auto max-w-[1180px] h-[488px] bg-blue-500 rounded-xl p-8">
      <div className="flex flex-col items-center text-center gap-6 p-20">
        <h1 className="text-4xl  text-white">
          What Our Customers Are Saying
        </h1>
        <div className="w-16 h-[2.5px] bg-white"></div>

        <div className="flex  gap-6 rounded-lg p-6 items-center ">
          <Image
            src="/avatar.png"
            alt="Customer Avatar"
            width={80}
            height={80}
            className="rounded-full"
          />
          <h2 className="text-xl font-semibold text-blue-800">Said Mazouz</h2>
          <div>
            <p className="text-lg text-gray-700 mt-2 max-w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CustomerTestimonials };
