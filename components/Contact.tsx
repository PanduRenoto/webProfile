'use client';

const Contact = () => {
    return (
        <section id="contact" className="pt-36 pb-32">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-kuning mb-2">Contact</h4>
                        <h2 className="font-bold text-hitam text-3xl mb-4 sm:text-4xl lg:text-5xl">Hubungi Saya</h2>
                        <p className="font-medium text-abu md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deserunt.</p>
                    </div>
                </div>
                <form>
                    <div className="w-full lg:w-2/3 lg:mx-auto">
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="name" className="text-base text-kuning font-bold">Nama</label>
                            <input type="text" id="name" className="w-full bg-slate-200 text-hitam p-3 rounded-md focus:outline-none focus:ring-kuning focus:ring-1 focus:border-kuning"/>
                        </div>
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="email" className="text-base text-kuning font-bold">Email</label>
                            <input type="email" id="email" className="w-full bg-slate-200 text-hitam p-3 rounded-md focus:outline-none focus:ring-kuning focus:ring-1 focus:border-kuning"/>
                        </div>
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="pesan" className="text-base text-kuning font-bold">Pesan</label>
                            <textarea id="pesan" className="w-full bg-slate-200 text-hitam p-3 rounded-md focus:outline-none focus:ring-kuning focus:ring-1 focus:border-kuning h-32"/>
                        </div>
                        <div className="w-full px-4">
                            <button className="text-base font-semibold text-white bg-kuning py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">Kirim</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;
