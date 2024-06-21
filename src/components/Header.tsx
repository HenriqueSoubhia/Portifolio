import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-gray-blue flex justify-center text-white p-2 fixed top-0 w-full z-50">
      <div className="max-w-6xl flex justify-between items-center w-full">
        <h2 className="text-3xl">
          Henrique <span className="font-bold">Soubhia</span>
        </h2>

        <nav>
          <ul className="flex">
            <li className="p-5 transition-all cursor-pointer hover:bg-skyblue hover:text-gray-blue">
              <Link href="#home">Home</Link>
            </li>
            <li className="p-5 transition-all cursor-pointer hover:bg-skyblue hover:text-gray-blue">
              <Link href="#sobre">Sobre</Link>
            </li>
            <li className="p-5 transition-all cursor-pointer hover:bg-skyblue hover:text-gray-blue">
              <Link href="#projetos">Projetos</Link>
            </li>
            <li className="p-5 transition-all cursor-pointer hover:bg-skyblue hover:text-gray-blue">
              <Link href="#contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
