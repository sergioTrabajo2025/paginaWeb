import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShowcaseCarousel from "./components/ShowcaseCarousel";
import Footer from "./components/Footer";
import { SLIDES } from "./data/slides";

function BackgroundDecor() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10">
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-purple-500/10 blur-3xl" />
      <div className="absolute inset-0 [background:radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px]" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <BackgroundDecor />
      <Navbar />
      <ShowcaseCarousel slides={SLIDES} />
           <Hero /> 

      <Footer />
    </div>
  );
}
