import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import Marketplace from "./components/Marketplace.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030014] text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    <Header />
    <main className="relative">
      <Hero />
      <Features />
      <Marketplace />
    </main>
    <Footer />
  </div>
  );
}
