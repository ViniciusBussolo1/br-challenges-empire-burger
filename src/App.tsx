import { Header } from "./components/Header/Header";
import { Presentation } from "./components/Presentation/Presentation";
import { Card } from "./components/Card/Card";

import Burger from "./assets/icons/burger.svg";
import HeadSet from "./assets/icons/headset.svg";
import Delivery from "./assets/icons/delivery.svg";

import "./styles/main.css";

function App() {
  return (
    <>
      <div className="bg-banner h-[34.063rem] w-full">
        <Header />
        <Presentation />
        <div className="max-w-[60.625rem] h-[7.409rem] mx-auto bg-white rounded-[0.625rem] drop-shadow-cardsShadow flex justify-around items-center">
          <Card
            src={Burger}
            title="Artesanal"
            content="Nossas receitas são feitas com todo cuidado"
          />

          <Card
            src={HeadSet}
            title="Atendimento"
            content="Totalmente personalizado"
          />

          <Card
            src={Delivery}
            title="DELIVERY Speed"
            content="Entregamos menos de 45 minutos"
          />
        </div>
      </div>
      <section className="max-w-[73.185rem] mt-[9rem] mx-auto">
        <h1 className="text-[2rem] leading-[2.188rem] font-Lilita uppercase text-black">
          Ofertas especiais
        </h1>
        <p className="text-[1rem] leading-[1.375rem] text-texto mt-[0.25rem]">
          Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque
          sempre estamos mudando o nosso cardapio.
        </p>
        <div className="w-full grid grid-cols-[48.125rem_25rem] gap-1 mt-4">
          <div className="bg-oferta-red w-[48.125rem] h-[26.875rem]">asdas</div>
          <div className="place-self-center">
            <div className="bg-oferta-yellow w-[23.185rem] h-[12.5rem]">
              asdas
            </div>
            <div className="bg-oferta-brown w-[23.185rem] h-[12.5rem] mt-[1.875rem]">
              asdas
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
