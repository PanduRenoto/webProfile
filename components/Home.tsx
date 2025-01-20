'use client';

import Image from "next/image";
import akupng from '../public/image/wow.png';

const HomePage = () => {
    return (
        <section id="home" className="pt-36 pb-32">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4 lg:w-1/2">
                        <h1 className="text-base font-semibold text-kuning md:text-xl">Halo semua👋, saya
                            <span className="block font-bold text-hitam text-4xl lg:text-5xl">Pandu Renoto</span>
                        </h1>
                        <h2 className="font-medium text-abu text-lg mb-5 lg:text-2xl">Student & Junior Web Developer
                        </h2>
                        <p className="font-medium text-abu mb-10 leading-relaxed">Lagi belajar web programming ygy!</p>
                        <a href="https://wa.me/6282143408625" className="text-base font-semibold text-white bg-kuning py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out" target="_blank">Hubungi Saya</a>
                    </div>
                    <div className="w-full self-end px-4 lg:w-1/2">
                        <div className="mt-16 relative lg:mt-9 lg:right-0">
                            <Image src={akupng} alt="aku" width={400} className="mx-auto z-50"/>
                            <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                                <svg width={400} height={400} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#F5BE37" d="M42,-70C54.9,-65.3,66.2,-55,74.2,-42.4C82.1,-29.8,86.8,-14.9,84.1,-1.6C81.4,11.7,71.2,23.5,60.3,31C49.4,38.6,37.8,42,27.6,49.4C17.5,56.8,8.7,68.2,-2.8,73C-14.3,77.9,-28.7,76.2,-36.8,67.6C-44.9,59,-46.8,43.6,-53.9,31.1C-61,18.7,-73.4,9.4,-78.2,-2.7C-82.9,-14.8,-79.9,-29.6,-72.3,-41.1C-64.6,-52.6,-52.1,-60.6,-39.3,-65.4C-26.5,-70.2,-13.2,-71.6,0.7,-72.7C14.5,-73.9,29.1,-74.7,42,-70Z" transform="translate(100 100)" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage;
