

function Clients() {
  return (
    <section id="clients" className="flex flex-col items-center w-full md:py-20 py-20 gap-8 lg:gap-4 px-4 md:px-10">
        <div className="flex flex-col lg:items-center justify-between lg:flex-row w-full gap-6">
            <h1 className="flex flex-col text-white md:text-5xl text-4xl font-poppins font-semibold gap-2 md:gap-6">
                <div>What People are</div>
                <div>saying about us</div>
            </h1>
            <div className="text-gray-400 font-poppins lg:max-w-[26rem]">
                Everything you need to accept card payments and grow your business anywhere on the planet.
            </div>
        </div>
    </section>
  )
}

export default Clients