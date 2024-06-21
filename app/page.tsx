import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // <main className="flex min-h-screen mt-10 flex-col items-center justify-between p-24">
    //   Home Page
    // </main>
    <div className="min-h-screen flex flex-col">
    <div
      style={{
        // backgroundImage: `url('/images/lawscales.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="flex-shrink-0 h-[50vh] lg:h-screen"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="m-auto">
          <h1 className="text-black text-4xl ml-2 sm:text-5xl lg:text-8xl mt-6 font-bold">
            Unsplash <br></br>& Rick and Morty API Documentation
          </h1>
          <h2 className="text-black text-lg ml-2 sm:text-lg lg:text-4xl mt-6 ">Get reliable & comprehensive data for businesses and developer goals</h2>
        </div>
      </div>
    </div>

    <div className="p-8 sm:p-16">
      <div className="flex flex-col justify-center">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-medium">
        Get beautiful images <br /> and cool facts via the APIs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-8 mt-4 lg:mt-10 justify-items-center">
          
          <div className="flex flex-col p-4 sm:p-8 justify-center border-2 hover:border-gray-700 rounded-lg h-48 sm:h-64 w-full">
            <p className="mb-2 text-gray-400">01</p>
            <p className="mb-2 font-semibold ">Get Beautiful Stock Images</p>
            
            <Link href={"/"}>
              <p className="flex flex-row text-sm text-gray-700">
                Learn More 
              </p>
            </Link>
          </div>
          <div className="flex flex-col p-4 sm:p-8 justify-center border-2 hover:border-gray-700 rounded-lg h-48 sm:h-64 w-full">
            <p className="mb-2 text-gray-400">02</p>
            <p className="mb-2 font-semibold ">
              Get Cool Rick & Morty Facts</p>
            
            <Link href={"/"}>
              <p className="flex flex-row text-sm text-gray-700">
                Learn More 
              </p>
            </Link>
          </div>
          <div className="flex flex-col p-4 sm:p-8 justify-center border-2 hover:border-gray-700 rounded-lg h-48 sm:h-64 w-full">
            <p className="mb-2 text-gray-400">03</p>
            <p className="mb-2 font-semibold ">
              Get comprehensive data for your buisness
            </p>
            
            <Link href={"/"}>
              <p className="flex flex-row text-sm text-gray-700">
                Learn More
              </p>
            </Link>
          </div>
          
        </div>
      </div>
    </div>



    <div className="mx-8 border border-gray-100"></div>

    <div className="p-8 md:p-16">
      <div className="flex flex-col md:flex-row justify-center md:space-x-16">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl md:text-5xl font-semibold mb-4 md:mb-14">
           Try the APIs<br></br> for free today
          </h1>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur <br></br>adipiscing elit,
            sed do eiusmod tempor
          </p>
          <div className="mt-8 ">
            
            <button className="mr-7 mb-4 md:mb-0 bg-[#000000] hover:bg-gray-700 text-white font-bold py-2 px-4 ">
              Read the Docs
            </button>
            <button className="mr-8 bg-transparent hover:bg-[#000000] text-[#000000] font-semibold hover:text-white py-2 px-4 border border-[#000000] hover:border-transparent rounded">
              Check out the Demos
            </button>
          </div>
        </div>
        {/* <div className="flex-shrink-0">
          <Image
            src={"/images/MD.jpeg"}
            alt={"lawyer"}
            width={350}
            height={150}
            className="rounded-md"
          />
        </div> */}
      </div>
    </div>
  </div>
  );
}
