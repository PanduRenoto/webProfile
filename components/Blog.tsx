'use client';

import Link from "next/link";
import Image from "next/image";
import kadal from '../public/image/kadal.jpg';
import joko from '../public/image/joko.jpeg';
import sirkus from '../public/image/sirkus.jpeg';
import gedang from '../public/image/gedang.jpeg';
import aku from '../public/image/aku.jpeg';
import { useState } from "react";

const blogItems = [
    {
        id: 1,
        title: "Kadal enak",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, deleniti?",
        category: "Hewan",
        image: kadal
    },
    {
        id: 2,
        title: "Mie Joko enak",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, deleniti?",
        category: "Makanan",
        image: joko
    },
    {
        id: 3,
        title: "Sirkus enak",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, deleniti?",
        category: "Aku",
        image: sirkus
    },
    {
        id: 4,
        title: "Gedang enak",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, deleniti?",
        category: "Makanan",
        image: gedang
    },
    {
        id: 5,
        title: "Aku enak",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, deleniti?",
        category: "Aku",
        image: aku
    }
]

const categories = ["All", "Hewan", "Makanan", "Aku"]

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredItems = selectedCategory === "All"
        ? blogItems
        : blogItems.filter((item) => item.category === selectedCategory)

    return (
        <section id="blog" className="pt-36 pb-32 bg-slate-100">
            <div className="container">
                {/* header */}
                <div className="w-full px-4">
                    <div className="w-full px-4">
                        <div className="max-w-xl mx-auto text-center mb-16">
                            <h4 className="font-semibold text-lg text-kuning mb-2">Blog</h4>
                            <h2 className="font-bold text-hitam text-3xl mb-4 sm:text-4xl lg:text-5xl">Tulisan terkini</h2>
                            <p className="font-medium text-md text-abu md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquid at harum voluptas ipsum officia.</p>
                        </div>
                    </div>

                    {/* filter */}
                    <div className="w-full px-4 mb-8 flex justify-center">
                        {categories.map((category) => (
                            <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 mx-2 rounded-md font-medium text-hitam ${selectedCategory === category ? "bg-kuning text-white" : "bg-gray-200 hover:bg-kuning"}`}>{category}</button>
                        ))}
                    </div>

                    {/* blog */}
                    <div className="flex flex-wrap justify-center">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="w-full px-4 lg:w-1/2 xl:w-1/3">
                                <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                                    <Image src={item.image} alt={item.title} className="w-full" />
                                    <div className="py-8 px-6">
                                        <h3 className="block mb-3 font-semibold text-xl text-hitam truncate">{item.title}</h3>
                                        <p className="font-medium text-abu text-base mb-6">{item.description}</p>
                                        <div className="font-medium text-sm text-white bg-kuning py-2 px-4 rounded-lg hover:opacity-80 w-fit">
                                            <Link href={`/blog/${item.id}`}>
                                                <h4>Baca Selengkapnya</h4>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;
