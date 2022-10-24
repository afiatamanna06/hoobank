/* eslint-disable @next/next/no-img-element */


function Contact() {
  return (
    <section className="flex flex-col items-center w-full md:py-20 py-20 gap-12 px-4 md:px-10">
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
    </section>
  )
}

export default Contact