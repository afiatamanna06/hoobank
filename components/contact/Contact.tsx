/* eslint-disable @next/next/no-img-element */

import GetStartedButton from "../common/GetStartedButton"

function Contact() {
  return (
    <section className="flex flex-col items-center w-full md:py-20 py-20 gap-20 px-4 md:px-10">
        <div className="flex flex-col items-center justify-between lg:flex-row w-full gap-12">
            <div className="flex gap-8 flex-1 items-center">
                <img src="/airbnb.png" className="flex-1 h-[3rem] lg:h-[5rem] w-[10rem]" alt="" />
                <img src="/binance.png" className="flex-1 h-[100%] w-[10rem]" alt="" />
            </div>
            <div className="flex gap-8 flex-1 items-center">
                <img src="/coinbase.png" className="flex-1 h-[2rem] lg:h-[3.5rem] w-[8rem]" alt="" />
                <img src="/dropbox.png" className="flex-1 h-[100%] w-[10rem]" alt="" />
            </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 px-12 py-14 rounded-[20px] bg-gradient-to-bl from-[#272727] to-[#11101d] cursor-pointer">
            <div className="flex flex-col gap-2 md:gap-6">
                <h1 className="text-white md:text-5xl text-2xl font-poppins font-semibold">Let&apos;s try our service now!</h1>
                <p className="font-poppins font-normal text-gray-400 lg:max-w-[26rem]">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <GetStartedButton />
        </div>
    </section>
  )
}

export default Contact