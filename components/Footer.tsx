'use client';

const Footer = () => {
    return (
        <footer className="bg-hitam pt-24 pb-12">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                        <h2 className="font-bold text-4xl text-white mb-5">PANDU</h2>
                        <h3 className="font-bold text-2xl mb-2">Hubungi Saya</h3>
                        <p>panduprwk05@gmail.com</p>
                        <p>Jl. Raya Sitirejo No. 35A</p>
                        <p>Kabupaten Malang</p>
                    </div>
                    <div className="w-full px-4 mb-12 md:w-1/3">
                        <h3 className="font-semibold text-xl text-white mb-5">Kategori Tulisan</h3>
                        <ul className="text-slate-300">
                            <li>
                                <a href="#" className="inline-block text-base hover:text-kuning mb-3">Programming</a>
                            </li>
                            <li>
                                <a href="#" className="inline-block text-base hover:text-kuning mb-3">Teknologi</a>
                            </li>
                            <li>
                                <a href="#" className="inline-block text-base hover:text-kuning mb-3">Gaya Hidup</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 mb-12 md:w-1/3">
                        <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
                        <ul className="text-slate-300">
                            <li>
                                <a href="#home" className="inline-block text-base hover:text-kuning mb-3">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="inline-block text-base hover:text-kuning mb-3">About</a>
                            </li>
                            <li>
                                <a href="#portfolio" className="inline-block text-base hover:text-kuning mb-3">Portfolio</a>
                            </li>
                            <li>
                                <a href="#blog" className="inline-block text-base hover:text-kuning mb-3">Blog</a>
                            </li>
                            <li>
                                <a href="#contact" className="inline-block text-base hover:text-kuning mb-3">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full pt-10 border-t border-slate-700">
                    <p className="font-medium text-xs text-slate-500 text-center">Dibuat dengan 🎉 oleh 
                        <a href="https://www.instagram.com/asepvindagnyr/" target="_blank" className="font-bold text-kuning"> Pandu Renoto</a>, menggunakan
                        <a href="https://nextjs.org/" target="_blank" className="font-bold text-[#EDEDED]"> NextJS</a>, 
                        <a href="https://react.dev/" target="_blank" className="font-bold text-[#58C4DC]"> ReactJS</a>, dan 
                        <a href="https://tailwindcss.com" target="_blank" className="font-bold text-sky-500"> Tailwind CSS</a>.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
