import Banner from "@/components/Sections/Banner";
import Header from "../components/Header";
import Sobre from "@/components/Sections/Sobre";
import Projetos from "@/components/Sections/Projetos";
import Footer from "@/components/Footer";
import Contato from "@/components/Sections/Contato";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-12 md:pt-20">
        <Banner/>
        <Sobre />
        <Projetos/>
        <Contato/>
      </main>

      <Footer/>
    </>
  );
}
