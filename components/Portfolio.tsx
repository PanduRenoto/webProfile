'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import toDoListTS from '../public/image/toDoListTS.png';
import modulNextJS from '../public/image/modulNextJS.png';
import modulReact from '../public/image/modulReact.png';
import slicingDesign from '../public/image/slicingDesign.png';

const portfolioItems = [
    {
        id: 1,
        title: "Slicing Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem totam, est nesciunt amet temporibus accusantium!",
        category: "Project",
        image: slicingDesign
    },
    {
        id: 2,
        title: "To Do List TypeScript",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem totam, est nesciunt amet temporibus accusantium!",
        category: "Project",
        image: toDoListTS
    },
    {
        id: 3,
        title: "Tugas Modul NextJS",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem totam, est nesciunt amet temporibus accusantium!",
        category: "Tugas",
        image: modulNextJS
    },
    {
        id: 4,
        title: "Tugas Modul ReactJS",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem totam, est nesciunt amet temporibus accusantium!",
        category: "Tugas",
        image: modulReact
    },
]

const categories = ["All", "Project", "Tugas"]

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredItems = selectedCategory === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === selectedCategory)

    return (
        <section id="portfolio" className="pt-36 pb-16">
            <div className="container">
                {/* header */}
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-kuning mb-2">Portfolio</h4>
                        <h2 className="font-bold text-hitam text-3xl mb-4 sm:text-4xl lg:text-5xl">Project Terbaru</h2>
                        <p className="font-medium text-md text-abu md:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti minima incidunt voluptates cumque laborum quas quis ducimus id numquam sed!</p>
                    </div>
                </div>

                {/* filter */}
                <div className="w-full px-4 mb-8 flex justify-center">
                    {categories.map((category) => (
                        <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 mx-2 rounded-md font-medium text-hitam ${selectedCategory === category ? "bg-kuning text-white" : "bg-gray-200 hover:bg-kuning"}`}>{category}</button>
                    ))}
                </div>

                {/* portfolio */}
                <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="mb-12 p-4 md:w-1/2">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <Image src={item.image} alt={item.title} className="w-full" />
                            </div>
                            <div className="font-semibold text-hitam text-xl mt-5 mb-3 hover:text-kuning w-fit">
                                <Link href={`/portfolio/${item.id}`}>
                                    <h3>{item.title}</h3>
                                </Link>
                            </div>
                            <p className="font-medium text-base text-abu">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio;
