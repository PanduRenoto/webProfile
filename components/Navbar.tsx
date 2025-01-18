'use client';

import { useEffect } from "react";

const Navbar = () => {
    useEffect(() => {
        // navbar fixed
        const header = document.querySelector('header') as HTMLElement
        const fixedNav = header?.offsetTop

        const handleScroll = () => {
            if (window.pageYOffset > (fixedNav || 0)) {
                header?.classList.add('navbar-fixed')
            } else {
                header?.classList.remove('navbar-fixed')
            }
        }

        window.addEventListener('scroll', handleScroll)

        // hamburger
        const hamburger = document.querySelector('#hamburger') as HTMLElement
        const navMenu = document.querySelector('#nav-menu') as HTMLElement

        const toggleMenu = () => {
            hamburger?.classList.toggle('hamburger-active')
            navMenu?.classList.toggle('hidden')
        }

        hamburger?.addEventListener('click', toggleMenu)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            hamburger?.removeEventListener('click', toggleMenu)
        }
    }, [])

    return (
        <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <a href="#home" className="font-bold text-lg text-kuning block py-6">pandurenoto</a>
                    </div>
                    <div className="flex items-center px-4">
                        <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
                            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                        </button>
                        <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                            <ul className="block lg:flex">
                                <li className="group">
                                    <a href="#home" className="text-base text-hitam py-2 mx-8 flex group-hover:text-kuning">Home</a>
                                </li>
                                <li className="group">
                                    <a href="#about" className="text-base text-hitam py-2 mx-8 flex group-hover:text-kuning">About Me</a>
                                </li>
                                <li className="group">
                                    <a href="#portfolio" className="text-base text-hitam py-2 mx-8 flex group-hover:text-kuning">Portfolio</a>
                                </li>
                                <li className="group">
                                    <a href="#blog" className="text-base text-hitam py-2 mx-8 flex group-hover:text-kuning">Blog</a>
                                </li>
                                <li className="group">
                                    <a href="#contact" className="text-base text-hitam py-2 mx-8 flex group-hover:text-kuning">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;
