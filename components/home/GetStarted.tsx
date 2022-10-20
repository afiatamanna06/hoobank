import { FiArrowUpRight } from "react-icons/fi"

function GetStarted() {
  return (
    <div className="w-[10rem] h-[10rem] font-poppins rounded-full bg-gradient-to-tr from-[#def9fa] via-[#bef3f5] via-[#9dedf0] via-[#7de7eb] via-[#5ce1e6] to-[#33bbcf] p-[2px] cursor-pointer">
        <div className="flex flex-col justify-center items-center bg-primary w-[100%] h-[100%] rounded-full">
            <div className="flex flex-row items-center bg-gradient-radial from-[#def9fa] via-[#bef3f5] via-[#9dedf0] via-[#7de7eb] via-[#5ce1e6] to-[#33bbcf] bg-clip-text text-transparent">
                Get
                <FiArrowUpRight color="white" size={20} />
            </div>
            <div className="bg-gradient-radial from-[#def9fa] via-[#bef3f5] via-[#9dedf0] via-[#7de7eb] via-[#5ce1e6] to-[#33bbcf] bg-clip-text text-transparent">Started</div>
        </div>
    </div>
  )
}

export default GetStarted