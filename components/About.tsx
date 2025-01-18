'use client';

const About = () => {
    return (
        <section id="about" className="pt-36 pb-32 bg-slate-100">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-10 lg:w-1/2">
                        <h4 className="font-bold text-kuning text-lg mb-3">TENTANG SAYA</h4>
                        <h2 className="font-bold text-3xl mb-5 max-w-md lg:text-4xl">Ayo belajar bareng!</h2>
                        <p className="font-medium text-base text-abu max-w-xl lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis suscipit ab tempore corrupti non illo.</p>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <h3 className="font-semibold text-hitam text-2xl mb-4 lg:text-3xl lg:pt-10">Mari berteman</h3>
                        <p className="font-medium text-base text-abu mb-6 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere deleniti esse voluptate eveniet sed illo recusandae et molestiae doloremque.</p>
                        <div className="w-[150px] flex justify-between mx-auto">
                            <a href="https://www.instagram.com/asepvindagnyr/" target="_blank" className="w-[40px] h-[40px] bg-white flex justify-center items-center rounded-full relative shadow-slate-600 shadow-md hover:shadow-lg hover:shadow-slate-700 hover:bg-gradient-to-bl from-[#833AB4] via-[#FD1D1D] to-[#FFDC80] hover:fill-white">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="instagram">
                                    <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path>
                                </svg>
                            </a>
                            <a href="https://github.com/PanduRenoto" target="_blank" className="w-[40px] h-[40px] bg-white flex justify-center items-center rounded-full relative shadow-slate-600 shadow-md hover:shadow-lg hover:shadow-slate-700 hover:bg-black hover:fill-white">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                                    <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/pandu-renoto-widi-kusumo-8644832a9/" target="_blank" className="w-[40px] h-[40px] bg-white flex justify-center items-center rounded-full relative shadow-slate-600 shadow-md hover:shadow-lg hover:shadow-slate-700 hover:bg-[#0077B5] hover:fill-white">
                                <svg className="w-5 h-5 ml-[1px]" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 512 512" xmlSpace="preserve">
                                    <g id="7935ec95c421cee6d86eb22ecd125aef">
                                        <path className="inline-custom" d="M116.504,500.219V170.654H6.975v329.564H116.504L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"></path>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
