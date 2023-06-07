import { useEffect, useState } from "react";

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

  const formCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <section
      className="mt-[4rem] w-full flex lg:flex-col xl:flex-row"
      id="cardapio"
    >
      <div className="bg-banner-cardapio xl:w-[59.002rem] h-[35.957rem] lg:w-full lg:bg-no-repeat lg:bg-cover lg:justify-end lg:items-center flex xl:items-center xl:justify-end ">
        <div className="w-[40rem] pl-[5rem]">
          <div className="w-[30rem]">
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
      </div>

      <div className="xl:w-[60rem] lg:w-full h-[35.957rem] bg-brown pl-[1.936rem] pr-[1.936rem] flex items-center ">
        <div className="flex flex-col gap-8 items-start h-[30rem] lg:w-full lg:items-center">
          <h1 className="w-[28.063rem] font-Lilita text-[2rem] leading-[2.188rem] uppercase text-yellow">
            Cardápio imperial | Burger
          </h1>

          <ul className="">
            {plate.map((item) => {
              return (
                <li key={item.plate}>
                  <div className="flex justify-between">
                    <h3 className="w-[12.813rem] text-[1.1rem] leading-[1.375rem] font-Lilita text-titulo-cardapio uppercase">
                      {item.plate}
                    </h3>
                    <span className="text-[1rem] leading-[1.375rem] font-Lilita text-titulo-cardapio tracking-[0.2rem] mr-[0.5rem]">
                      .............................
                    </span>
                    <span className="text-[1.25rem] leading-[1.375rem] font-Lilita text-titulo-cardapio uppercase text-right">
                      R${item.price}
                    </span>
                  </div>

                  <p className="max-w-[29.375rem] text-[1rem] leading-[1.375rem] text-color-oferta-h2 mt-[0.25rem] mb-[2rem]">
                    {item.ingredients}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
