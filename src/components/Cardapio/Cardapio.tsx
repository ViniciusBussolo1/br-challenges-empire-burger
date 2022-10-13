import { useEffect, useState } from "react";

import { ItemCardapio } from "./ItemCardapio";

import axios from "axios";

interface ItemsProps {
  plate: string;
  price: number;
  ingredients: string;
}

export function Cardapio() {
  const [plate, setPlate] = useState<ItemsProps[]>([]);

  useEffect(() => {
    axios
      .get("https://api.brchallenges.com/api/empire-burger/menu")
      .then((resp) => {
        setPlate(resp.data);
      });
  }, []);

  return (
    <section className="mt-[4rem] w-full flex" id="cardapio">
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

      <div className="w-[60rem] h-[35.957rem] bg-brown pt-[4.491rem] pl-8 ">
        <h1 className="font-Lilita text-[2rem] leading-[2.188rem] uppercase text-yellow">
          Cardápio imperial | Burger
        </h1>

        {plate.map((item) => {
          return (
            <ItemCardapio
              key={item.plate}
              plate={item.plate}
              ingredients={item.ingredients}
              price={item.price}
              className="mt-[1.2rem]"
            />
          );
        })}
      </div>
    </section>
  );
}
