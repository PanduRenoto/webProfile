'use client';

import { useParams } from "next/navigation";
import Image from "next/image";
import { StaticImageData } from "next/image";
import kadal from "../../../public/image/kadal.jpg";
import joko from "../../../public/image/joko.jpeg";
import sirkus from "../../../public/image/sirkus.jpeg";
import gedang from "../../../public/image/gedang.jpeg";
import aku from "../../../public/image/aku.jpeg";

const blogDetails: Record<string, { title: string; description: string; image?: StaticImageData }> = {
    1: {
        title: "Kadal Enak",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, nulla magni totam similique illum voluptates eveniet commodi voluptatem incidunt iusto, quo nihil. Nostrum, eius! Enim odit omnis totam et nulla.",
        image: kadal
    },
    2: {
        title: "Mie Joko Enak",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, nulla magni totam similique illum voluptates eveniet commodi voluptatem incidunt iusto, quo nihil. Nostrum, eius! Enim odit omnis totam et nulla.",
        image: joko
    },
    3: {
        title: "Sirkus Enak",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, nulla magni totam similique illum voluptates eveniet commodi voluptatem incidunt iusto, quo nihil. Nostrum, eius! Enim odit omnis totam et nulla.",
        image: sirkus
    },
    4: {
        title: "Gedang Enak",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, nulla magni totam similique illum voluptates eveniet commodi voluptatem incidunt iusto, quo nihil. Nostrum, eius! Enim odit omnis totam et nulla.",
        image: gedang
    },
    5: {
        title: "Aku Enak",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, nulla magni totam similique illum voluptates eveniet commodi voluptatem incidunt iusto, quo nihil. Nostrum, eius! Enim odit omnis totam et nulla.",
        image: aku
    }
}

const BlogDetail = () => {
    const { id } = useParams()
    const numericId = id ? Number(id) : NaN

    if (isNaN(numericId) || !blogDetails[numericId]) {
        return <h1>Blog tidak ditemukan</h1>
    }

    const blog = blogDetails[numericId]

    return (
        <div className="h-screen flex items-center">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-10 lg:w-1/2">
                        <h1 className="font-bold text-3xl mb-5 max-w-md lg:text-4xl">{blog.title}</h1>
                        <p className="font-medium text-base text-abu max-w-xl lg:text-lg">{blog.description}</p>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <Image src={blog.image!} alt={blog.title} className="w-full border-4 border-kuning rounded-md" />
                    </div>
                </div>
                <a href="/#blog" className="font-medium text-lg text-white bg-kuning py-2 px-4 rounded-lg hover:opacity-80 w-48 text-center lg:w-fit absolute bottom-10 left-1/2 transform -translate-x-1/2">Kembali ke Halaman Utama</a>
            </div>
        </div>
    )
}

export default BlogDetail;
