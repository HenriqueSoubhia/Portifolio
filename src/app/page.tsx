import Banner from "@/components/Sections/Banner";
import Header from "../components/Header";
import Sobre from "@/components/Sections/Sobre";
import Projetos from "@/components/Sections/Projetos";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 ">
        <Banner/>
        <Sobre />
        <Projetos/>
      </main>
    </>
  );
}
