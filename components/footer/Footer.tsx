/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { footerLinks } from "./FooterLinks"
import { socialLinks } from "./SocialLinks"

function Footer() {
  return (
    <section className="flex flex-col items-center w-full py-16 mb-8 gap-10 px-4 md:px-10 text-white">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-8 lg:gap-12">
            <div className="flex flex-col gap-4">
                <img src="/logo.svg" className="h-[80%] w-[80%]" alt="" />
                <p className="font-poppins font-normal text-gray-400 lg:max-w-[26rem]">A new way to make the payments easy, reliable and secure.</p>
            </div>
            <div className="flex flex-col lg:flex-row w-full justify-between font-poppins font-normal gap-8 lg:gap-12">
                {footerLinks.slice(0, 1).map(({title, links}) => (
                    <div key={title} className="flex flex-col gap-4">
                        <p className="font-medium text-lg">{title}</p>
                        {links.map(({name, link}) => (
                            <Link href={link} key={name} passHref>
                                <p className="text-gray-400 hover:text-secondary cursor-pointer">{name}</p>
                            </Link>
                        ))}
                    </div>
                ))}
                {footerLinks.slice(1, 2).map(({title, links}) => (
                    <div key={title} className="flex flex-col gap-4">
                        <p className="font-medium text-lg">{title}</p>
                        {links.map(({name, link}) => (
                            <Link href={link} key={name} passHref>
                                <p className="text-gray-400 hover:text-secondary cursor-pointer">{name}</p>
                            </Link>
                        ))}
                    </div>
                ))}
                {footerLinks.slice(2, 3).map(({title, links}) => (
                    <div key={title} className="flex flex-col gap-4">
                        <p className="font-medium text-lg">{title}</p>
                        {links.map(({name, link}) => (
                            <Link href={link} key={name} passHref>
                                <p className="text-gray-400 hover:text-secondary cursor-pointer">{name}</p>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </div>
        <div className="h-[1px] w-full bg-gray-400"></div>
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 font-poppins">
            <p className="font-medium text-center">Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>
            <div className="flex gap-4 items-center">
                {socialLinks.map(({icon, link}) => (
                    <Link href={link} key={link} passHref>
                        <div className="hover:text-secondary cursor-pointer">{icon}</div>
                    </Link>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Footer