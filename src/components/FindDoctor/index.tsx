import Image from "next/image";

const FindDoctor = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mx-auto max-w-[1200px] px-4 py-12 md:py-20">
      <div className="flex justify-center md:w-1/2">
        <Image
          src="/FindDoctor.png"
          alt="Find a Doctor"
          width={665}
          height={474}
          className="w-full max-w-md md:max-w-none"
        />
      </div>

      <div className="flex flex-col justify-center md:w-1/2">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl text-blue-900">
            Find a Doctor near you
          </h1>
          <div className="w-14 h-[2px] bg-black"></div>
          <p className="text-lg text-gray-500">
            Our app and web portal allow you to find a doctor at your nearest location.
          </p>
        </div>
        <div className="mt-6">
          <button className="text-blue-500 border border-blue-500 py-2 px-6 rounded-3xl hover:bg-blue-500 hover:text-white transition-all">
            Find now
          </button>
        </div>
      </div>
    </div>
  );
};

export { FindDoctor };
