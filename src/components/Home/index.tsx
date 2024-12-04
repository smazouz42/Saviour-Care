import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between container mx-auto gap-8">
      <div className="flex flex-col gap-8  justify-center md:w-[40%]  w-full">
        <h1 className="~text-3xl/6xl text-blue-900 "> Virtual healthcare Saviour for you</h1>
        <p className="text-blue-300 text-lg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
        <button className=" bg-blue-500 text-white w-fit ~py-2/4 ~px-3/6 rounded-3xl">Consult a doctor</button>
      </div>
      <Image src="/doctor.png" alt="Vercel Logo" width={769} height={554}  className="md:w-[60%] w-full "/>
    </div>
  );
};

export { HomePage };
 