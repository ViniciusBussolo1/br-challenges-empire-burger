import Logo from "../../assets/logo.png";
import Ifood from "../../assets/icons/ifood.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Whatsapp from "../../assets/icons/whatsapp.svg";

export function Header() {
  return (
    <header
      id="header"
      className="fixed z-10 h-16 w-full bg-brown/5 backdrop-blur-md flex items-center justify-between border-[1px] border-color-border"
    >
      <div className="max-w-[1170px] w-full mx-auto flex items-center justify-between">
        <img src={Logo} alt="Logo do site" />

        <nav className="mr-6 xl:flex items-center">
          <ul className="text-lg flex gap-4">
            <li className="font-normal cursor-pointer hover:text-color-hover hover:font-bold">
              <a href="#home">Home</a>
            </li>
            <li className="font-normal cursor-pointer hover:text-color-hover hover:font-bold">
              <a href="#ofertas">Promoção</a>
            </li>
            <li className="font-normal cursor-pointer hover:text-color-hover hover:font-bold">
              <a href="#cardapio">Cardapio</a>
            </li>
            <li className="font-normal cursor-pointer hover:text-color-hover hover:font-bold">
              <a href="#comentario">Comentario</a>
            </li>
            <li className="font-normal cursor-pointer hover:text-color-hover hover:font-bold">
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
        <div className="pr-20 flex gap-3 items-center">
          <a href="">
            <img src={Ifood} alt="Ifood" className="w-8" />
          </a>
          <a href="">
            <img src={Instagram} alt="Instagram" className="w-8" />
          </a>

          <div className="h-12 border-[1px] border-red"></div>
          <button className="bg-yellow w-32 h-8 flex justify-center items-center gap-2 px-4 py-1 rounded font-bold cursor-pointer ">
            <img src={Whatsapp} alt="whatsapp" className="h-5" /> Contato
          </button>
        </div>
      </div>
    </header>
  );
}
