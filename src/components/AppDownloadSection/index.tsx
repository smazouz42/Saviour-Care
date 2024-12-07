import Image from "next/image";

const AppDownloadSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 mx-auto max-w-[1200px] px-4 py-12 md:py-20">
      <div className="flex flex-col justify-center md:w-1/2">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl  text-blue-900">
            Download our Saviour Care mobile app
          </h1>
          <div className="w-14 h-[2px] bg-black"></div>
          <p className="text-lg text-gray-500">
            Our dedicated patient engagement app and web portal allow you to access
            information instantaneously (no tedious forms, long calls, or administrative
            hassle) and securely.
          </p>
        </div>
        <div className="mt-6">
          <button className="text-blue-500 border border-blue-500 py-2 px-6 rounded-3xl hover:bg-blue-500 hover:text-white transition-all">
            Download
          </button>
        </div>
      </div>

      <div className="flex justify-center md:w-1/2">
        <Image
          src="/app.png"
          alt="Saviour Care App"
          width={626}
          height={463}
          className="w-full max-w-md md:max-w-none"
        />
      </div>
    </div>
  );
};

export { AppDownloadSection };
