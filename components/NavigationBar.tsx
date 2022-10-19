import Image from "next/image"
import Link from "next/link"
import Logo from "../public/logo.svg"
import { navLinks } from "./NavigationLinks"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { useState } from "react"

function NavigationBar() {

  const [toggle, setToggle] = useState("hidden")

  return (
    <nav className="w-full bg-primary flex flex-col md:flex-row justify-between items-center px-4 md:px-10">
      <div className="w-full flex justify-between items-center">
        <Image src={Logo} width="100rem" height="60rem" alt="" />
        <div className="md:hidden" onClick={() => {toggle === "hidden" ? setToggle("flex flex-col") : setToggle("hidden")}}><HiOutlineMenuAlt3 color="white" size={22} /></div>
      </div>
      <div className={`${ toggle === "hidden" ? "flex flex-col" : "hidden" } pb-8 md:pb-0 md:flex md:flex-row items-center text-white gap-6`}>
        {navLinks.map(({path, name}) => (
          <Link key={name} href={path} passHref>
            <a className="font-poppins font-normal text-white cursor-pointer">{name}</a>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default NavigationBar