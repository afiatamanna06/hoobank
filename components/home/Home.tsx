/* eslint-disable @next/next/no-img-element */

import GetStarted from "./GetStarted"

function Home() {
  return (
    <section className={`flex flex-col md:flex-row px-4 md:px-10 py-20`}>
        <div className="flex flex-col gap-8">
            <div className="flex flex-row items-center md:w-[21rem] bg-gradient-to-tr from-[#272727] to-[#11101d] py-1 px-4 rounded-[10px] text-white gap-1">
                <img src="/Discount.svg" className="h-30 w-30" alt="" />
                <div className="font-medium">20%</div>
                Discount For
                <div className="font-medium">1 Month</div>
                Account
            </div>
            <div className="flex flex-row items-start justify-between w-full">
              <h1 className="text-white md:text-7xl text-4xl font-poppins font-semibold">
              The Next
              <div className="bg-gradient-radial from-[#def9fa] via-[#bef3f5] via-[#9dedf0] via-[#7de7eb] via-[#5ce1e6] to-[#33bbcf] bg-clip-text text-transparent my-4">Generation</div>
              Payment Method.
              </h1>
              <div className="sm:flex hidden">
                <GetStarted />
              </div>
            </div>
        </div>
    </section>
  )
}

export default Home