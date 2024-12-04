import Image from "next/image"

const Services = () => {
  const Services = [
    {
      img : "/services-icons/Search.png",
      width : 92,
      height : 90,
      name: "Search doctor",
      description: "Choose your doctor from thousands of specialist, general, and trusted hospitals"
    },
    {
      width : 62,
      height : 85,
      img : "/services-icons/Emergency.png",
      name: "Online pharmacy",
      description: "Buy your medicines with our mobile application with a simple delivery system"
    },
    {
      width : 68,
      height : 95,
      img : "/services-icons/Consultation.png",
      name: "Consultation",
      description: "Free consultation with our trusted doctors and get the best recomendations"
    },
    {
      width : 68,
      height : 95,
      img : "/services-icons/Details.png",
      name: "Details info",
      description: "Free consultation with our trusted doctors and get the best recomendations"
    },
    {
      width : 80,
      height : 71,
      img : "/services-icons/Emergency.png",
      name: "Emergency care",
      description: "You can get 24/7 urgent care for yourself or your children and your lovely family"
    },
    {
      width : 74,
      height : 95,
      img : "/services-icons/Tracking.png",
      name: "Tracking",
      description: "Track and save your medical history and health data "
    }
  ]
  return (
    <div>
      <div className="container mx-auto flex flex-col py-20">
        <div className="flex flex-col gap-4 items-center ">
          <h1 className="~text-3xl/4xl text-blue-900 ">Services We Offer</h1>
          <div className="w-[54px] h-[2px] bg-black text-blue-900" ></div>
          <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[34px] gap-y-[37px] justify-items-center max-w-[1200px] mx-auto " >
          {Services.map((service) => (
            <div className="flex flex-col gap-4 w-[350px] h-[350px] rounded-2xl items-center justify-center shadow-sm">
              <Image src={service.img} alt="Vercel Logo" width={service.width} height={service.height} />
              <h1 className="~text-xl/2xl bold font-semibold pt-6 ">{service.name}</h1>
              <p className="text-md text-gray-400 max-w-[270px]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export { Services }