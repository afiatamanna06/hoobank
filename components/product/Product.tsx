/* eslint-disable @next/next/no-img-element */

import GetStartedButton from "../common/GetStartedButton"

function Product() {
  return (
    <section id="product" className="flex flex-col items-center md:py-20 py-20 gap-8 lg:gap-4 px-4 md:px-10">
        <div className="flex flex-col items-center lg:flex-row gap-8 lg:gap-4">
            <img src="/bill.png" className="hidden lg:block object-cover flex-1 md:h-[70vh] md:w-[50vw]" alt="" />
            <div className="flex flex-col w-full flex-1 gap-6">
                <h1 className="flex flex-col text-white md:text-5xl text-2xl font-poppins font-semibold gap-2 md:gap-6">
                    <div>Easily control your</div>
                    <div>billing & invoicing</div>
                </h1>
                <div className="text-gray-400 font-poppins lg:max-w-[26rem]">
                    Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
                </div>
                <div className="flex gap-6">
                    <img src="/apple.svg" className="w-[10rem] h-[5rem] cursor-pointer" alt="" />
                    <img src="/google.svg" className="w-[10rem] h-[5rem] cursor-pointer" alt="" />
                </div>
            </div>
            <img src="/bill.png" className="lg:hidden object-cover flex-1 md:h-[75vh] md:w-[55vw]" alt="" />
        </div>
        <div className="flex flex-col items-center lg:flex-row gap-8 lg:gap-4">
            <div className="flex flex-col w-full flex-1 gap-6">
                <h1 className="flex flex-col text-white md:text-5xl text-2xl font-poppins font-semibold gap-2 md:gap-6">
                    <div>Find a better card deal</div>
                    <div>in few easy steps.</div>
                </h1>
                <div className="text-gray-400 font-poppins lg:max-w-[26rem]">
                    Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                </div>
                <GetStartedButton />
            </div>
            <img src="/card.png" className="object-cover flex-1 md:h-[75vh] md:w-[55vw]" alt="" />
        </div>
    </section>
  )
}

export default Product