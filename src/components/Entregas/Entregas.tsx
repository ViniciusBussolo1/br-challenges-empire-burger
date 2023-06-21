import { CardEntregas } from "./CardEntregas";

import WhatsApp from "/icons/whatsapp.svg";
import Delivery from "/icons/delivery.svg";
import IceCream from "/icons/ice-cream.svg";
import Ifood from "/icons/ifood.svg";

export function Entregas() {
  return (
    <section className=" pt-[8.019rem] mt-[8.4rem]">
      <div className="mx-auto max-w-[73.031rem] h-[33.478rem] flex items-center">
        <div className="bg-card-phone w-[35.625rem] h-full"></div>

        <div className="w-[35.59rem] h-[27.25rem] ml-[1.816rem]">
          <h1 className="text-[2rem] leading-[2.188rem] uppercase font-Lilita text-black">
            Nossas Entregas
          </h1>

          <CardEntregas
            src={WhatsApp}
            title="Whatsapp"
            content="Vamos direto ao ponto, sem perder tempo!"
          />

          <CardEntregas
            src={Delivery}
            title="Entrega"
            content="Entregamos menos de 45 minutos na porta da sua casa!"
          />

          <CardEntregas
            src={IceCream}
            title="Sobremesa"
            content="Pedidos assima de 100 reais, ganham brindes."
          />

          <CardEntregas
            src={Ifood}
            title="Ifood"
            content="Nossa loja é Top 1 da região!"
          />
        </div>
      </div>
    </section>
  );
}
