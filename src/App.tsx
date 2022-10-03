import { useState } from "react";

import "./styles/main.css";
import Logo from "./assets/logo.png";
import Ifood from "./assets/icons/ifood.svg";
import Instagram from "./assets/icons/instagram.svg";
import Whatsapp from "./assets/icons/whatsapp.svg";

function App() {
  return (
    <>
      <div className="bg-banner h-[524px] w-screen bg-cover">
        <header className="h-16 backdrop-blur-sm flex justify-center items-center border-b-[1px] border-b-color-border">
          <div className="w-[1170px] h-full bg-red-400 flex justify-between items-center ">
            <div>
              <img src={Logo} alt="Logo do site" />
            </div>
            <nav>
              <ul className="flex gap-4">
                <li className="text-lg font-normal cursor-pointer">Home</li>
                <li className="text-lg font-normal cursor-pointer">Promoção</li>
                <li className="text-lg font-normal cursor-pointer">Cardapio</li>
                <li className="text-lg font-normal cursor-pointer">
                  Comentario
                </li>
                <li className="text-lg font-normal cursor-pointer">Contato</li>
              </ul>
            </nav>
            <div className="flex gap-3 items-center">
              <img src={Ifood} alt="Ifood" className="cursor-pointer" />
              <img src={Instagram} alt="Instagram" className="cursor-pointer" />
              <div className="h-12 border-[1px] border-red"></div>
              <button className="bg-yellow w-32 h-9 flex items-center gap-2 px-4 py-1 rounded font-bold cursor-pointer ">
                <img src={Whatsapp} alt="whatsapp" className="h-6 w-6 " />{" "}
                Contato
              </button>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
