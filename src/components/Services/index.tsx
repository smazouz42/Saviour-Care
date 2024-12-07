import Image from "next/image"
import ServicesItems from "../../constants/Services"

const Services = () => {

  return (
    <div>
      <div className=" flex flex-col py-20">
        <div className="flex flex-col gap-4 items-center ">
          <h1 className="~text-3xl/4xl text-blue-900 ">Services We Offer</h1>
          <div className="w-[54px] h-[2px] bg-black text-blue-900" ></div>
          <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
        </div>
        <div>
          <Image src="/Services-bg.png" alt="Vercel Logo" width={937.96} height={671.38}
            className="absolute z-[-1]"
          />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[34px] gap-y-[37px] justify-items-center max-w-[1200px] mx-auto ~py-5/10" >
            {ServicesItems.map((service) => (
              <div className="flex flex-col gap-4 w-[350px] h-[350px] rounded-2xl items-center justify-center shadow-sm bg-white">
                <Image src={service.img} alt="Vercel Logo" width={service.width} height={service.height} />
                <h1 className="~text-xl/2xl bold font-semibold pt-6 ">{service.name}</h1>
                <p className="text-md text-gray-400 max-w-[270px]">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="text-blue-500 border border-blue-500 w-fit ~py-1/3 ~px-4/8 rounded-3xl ">learn more</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export { Services }