import Image from "next/image"
import Link from "next/link"
import Logo from "../public/logo.svg"
import { navLinks } from "./NavigationLinks"

function NavigationBar() {
  return (
    <nav className="w-full bg-primary flex justify-between items-center px-10">
      <Image src={Logo} width="100rem" height="60rem" alt="" />
      <div className="flex items-center text-white gap-6">
        {navLinks.map(({path, name}) => (
          <Link key={name} href={path} passHref>
            <a className="text-white cursor-pointer">{name}</a>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default NavigationBar