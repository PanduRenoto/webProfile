'use client';

import { useParams } from "next/navigation";
import Image from "next/image";
import { StaticImageData } from "next/image";
import slicingDesign from "../../../public/image/slicingDesign.png";
import toDoList from "../../../public/image/toDoListTS.png";
import nextjs from "../../../public/image/modulNextJS.png";
import reactjs from "../../../public/image/modulReact.png";

const portfolioDetails: Record<string, { title: string; description: string; image?: StaticImageData }> = {
    1: {
        title: "Slicing Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, nulla magni totam similique illum voluptates eveniet commodi voluptatem incidunt iusto, quo nihil. Nostrum, eius! Enim odit omnis totam et nulla.",
        image: slicingDesign
    },
    2: {
        title: "To Do List TypeScript",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, nulla magni totam similique illum voluptates eveniet commodi voluptatem incidunt iusto, quo nihil. Nostrum, eius! Enim odit omnis totam et nulla.",
        image: toDoList
    },
    3: {
        title: "Modul NextJS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, nulla magni totam similique illum voluptates eveniet commodi voluptatem incidunt iusto, quo nihil. Nostrum, eius! Enim odit omnis totam et nulla.",
        image: nextjs
    },
    4: {
        title: "Modul ReactJS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, nulla magni totam similique illum voluptates eveniet commodi voluptatem incidunt iusto, quo nihil. Nostrum, eius! Enim odit omnis totam et nulla.",
        image: reactjs
    }
}

const PortfolioDetail = () => {
    const { id } = useParams()
    const numericId = id ? Number(id) : NaN

    if (isNaN(numericId) || !portfolioDetails[numericId]) {
        return <h1>Portfolio tidak ditemukan</h1>
    }

    const portfolio = portfolioDetails[numericId]

    return (
        <div className="h-screen flex items-center">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-10 lg:w-1/2">
                        <h1 className="font-bold text-3xl mb-5 max-w-md lg:text-4xl">{portfolio.title}</h1>
                        <p className="font-medium text-base text-abu max-w-xl lg:text-lg mb-28">{portfolio.description}</p>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <Image src={portfolio.image!} alt={portfolio.title} className="w-full border-4 border-kuning rounded-md"/>
                    </div>
                </div>
                <a href="/#portfolio" className="font-medium text-lg text-white bg-kuning py-2 px-4 rounded-lg hover:opacity-80 w-fit">Kembali ke Halaman Utama</a>
            </div>
        </div>
    )
}

export default PortfolioDetail;
