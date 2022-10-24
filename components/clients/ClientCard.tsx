/* eslint-disable @next/next/no-img-element */
type propTypes = {
    content: string;
    name: string;
    title: string;
    img: string;
}

function ClientCard({content, name, title, img}: propTypes) {
  return (
    <div className="flex flex-col gap-4 flex-1 text-white px-10 py-8 rounded-[20px] hover:bg-gradient-to-br from-[#272727] to-[#11101d] cursor-pointer">
        <img src="/quotes.svg" className="h-[5rem] w-[2.5rem]" alt="" />
        <p className="font-poppins font-normal">{content}</p>
        <div className="flex gap-3 mt-4">
            <img src={img} className="h-[3rem] w-[3rem]" alt="" />
            <div className="flex flex-col">
                <h4 className="font-poppins font-semibold text-lg">{name}</h4>
                <p className="font-poppins font-normal text-gray-400">{title}</p>
            </div>
        </div>
    </div>
  )
}

export default ClientCard