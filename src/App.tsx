import { Header } from "./components/Header/Header";
import { Presentation } from "./components/Presentation/Presentation";
import { Card } from "./components/Card/Card";

import Burger from "../src/assets/icons/burger.svg";
import HeadSet from "../src/assets/icons/headset.svg";
import Delivery from "../src/assets/icons/delivery.svg";

import "./styles/main.css";
import { Ofertas } from "./components/Ofertas/Ofertas";

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
      <Ofertas />
      <section className="mt-[4rem] w-full flex">
        <div className="bg-banner-cardapio w-[59.002rem] h-[35.957rem] pt-[10rem] pl-[23.438rem] pr-[6.84rem] pb-[11.645rem]">
          <div className="w-[30rem] ">
            <h1 className="uppercase font-Lilita text-[2.589rem] rounded-[2.875rem] text-brown">
              Escolha o seu combo imperial,{" "}
              <span className="bg-yellow rounded-md p-2 text-center">
                peça agora!
              </span>
            </h1>
            <p className="text-[1rem] rounded-[1.375rem] text-texto mt-[0.603rem]">
              Temos vários tipos de pratos para a nossa realeza, fique esperto
              porque temos sempre promoção!
            </p>
            <button className="py-[0.625rem] px-[1.313rem] bg-color-button rounded-[0.326rem] text-white mt-[1.134rem]">
              Ver Cardápio Completo
            </button>
          </div>
        </div>
        <div className="w-[60rem] h-[35.957rem] bg-brown ">sadas</div>
      </section>
    </>
  );
}

export default App;
