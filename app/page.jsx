import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0B14] text-white overflow-hidden">
      <Header />
      <main className="relative container mx-auto px-4">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
