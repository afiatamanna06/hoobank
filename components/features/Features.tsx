import GetStartedButton from "../common/GetStartedButton"
import { featuresData } from "./FeatureList"

function Features() {
  return (
    <section id="features" className="flex flex-col items-center lg:flex-row md:py-40 py-20 gap-8 lg:gap-4 px-4 md:px-10">
        <div className="flex flex-col w-full flex-1 gap-6">
            <h1 className="flex flex-col text-white md:text-5xl text-2xl font-poppins font-semibold gap-2 md:gap-6">
                <div>You do the business,</div>
                <div>we&apos;ll handle the money.</div>
            </h1>
            <div className="text-gray-400 font-poppins lg:max-w-[26rem]">
                With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
            </div>
            <GetStartedButton />
        </div>
        <div className="flex flex-col w-full flex-1 gap-6">
            {featuresData.map(({icon, title, content}) => (
                <div key={title} className="flex flex-row p-2 md:p-6 rounded-[20px] gap-4">
                    <div className="w-[3.7rem] h-[3.7rem] rounded-full bg-dimBlue p-3">{icon}</div>
                    <div className="flex flex-col text-white">
                        <h4 className="font-poppins font-semibold text-xl">{title}</h4>
                        <p className="text-gray-400 font-poppins">{content}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Features