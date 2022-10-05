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
    </>
  );
}

export default App;
