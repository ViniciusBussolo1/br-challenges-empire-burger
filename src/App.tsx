import { Header } from "./components/Header/Header";
import { Presentation } from "./components/Presentation/Presentation";
import { Card } from "./components/Card/Card";

import Burger from "../src/assets/icons/burger.svg";
import HeadSet from "../src/assets/icons/headset.svg";
import Delivery from "../src/assets/icons/delivery.svg";

import { Ofertas } from "./components/Ofertas/Ofertas";
import { Cardapio } from "./components/Cardapio/Cardapio";
import { Atendimento } from "./components/Atendimento/Atendimento";
import { Entregas } from "./components/Entregas/Entregas";
import { Comentarios } from "./components/Comentarios/Comentarios";
import { Instragram } from "./components/Instagram/Instagram";
import { Pedido } from "./components/Pedido/Pedido";
import { Localization } from "./components/Localization/Localization";
import { Footer } from "./components/Footer/Footer";

import "./styles/main.css";

function App() {
  return (
    <>
      <div className="bg-banner h-[34.063rem] w-full" id="home">
        <Header />
        <Presentation />
        <div className="max-w-[60.625rem] h-[7.409rem] mx-auto bg-white rounded-[0.625rem] drop-shadow-cardShadow flex justify-around items-center">
          <Card
            src={Burger}
            alt="Burger"
            title="Artesanal"
            content="Nossas receitas são feitas com todo cuidado"
          />

          <Card
            src={HeadSet}
            alt="HeadSet"
            title="Atendimento"
            content="Totalmente personalizado"
          />

          <Card
            src={Delivery}
            alt="Delivery"
            title="DELIVERY Speed"
            content="Entregamos menos de 45 minutos"
          />
        </div>
      </div>
      <Ofertas />
      <Cardapio />
      <Atendimento />
      <Comentarios />
      <Instragram />
      <Entregas />
      <Pedido />
      <Localization />
      <Footer />
    </>
  );
}

export default App;
