import Navbar from "@/components/Navbar";
import HomePage from "@/components/Home";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto">
      <Navbar/>
      <HomePage/>
      <About/>
      <Portfolio/>
      <Blog/>
      <Contact/>
      <Footer/>
    </main>
  );
}
