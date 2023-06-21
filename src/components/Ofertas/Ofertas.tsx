import { useState } from "react";
import Timer from "/icons/timer.svg";

export function Ofertas() {
  const [isOpen, setIsOpen] = useState(false);

  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHours = currentDate.getHours();

  setInterval(() => {
    if (currentDay >= 1 && currentDay <= 5) {
      if (currentHours >= 17 && currentHours <= 23) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    } else if (currentDay === 0 || currentDay === 6) {
      if (currentHours >= 18 && currentHours <= 23) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }
  }, 1000);

  return (
    <section id="ofertas" className="w-full mt-[9rem]  ">
      <div className="max-w-[73.185rem] mx-auto lg:flex lg:flex-col lg:items-center xl:items-start">
        <h1 className="text-[2rem] leading-[2.188rem] font-Lilita uppercase text-black">
          Ofertas especiais
        </h1>
        <p className="text-[1rem] leading-[1.375rem] text-texto mt-[0.25rem]">
          Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque
          sempre estamos mudando o nosso cardapio.
        </p>
        <div className="grid lg:w-[48rem] lg:grid-cols-2 xl:w-full xl:grid-cols-[1fr_370px] gap-[1.875rem] mt-4">
          <div className="bg-oferta-red lg:bg-no-repeat lg:h-[26.875rem] lg:w-[48.125rem] lg:col-span-2 xl:row-span-2 xl:col-span-1 relative ">
            <div className="pl-[1.063rem] pt-[0.777rem] ">
              <h2 className="text-[1.563rem] leading-[1.75rem] uppercase font-Lilita text-color-oferta-h2">
                Burger imperial+batata
              </h2>
              <span className="text-[1.125rem] leading-[1.563rem] text-color-oferta-span">
                250kg
              </span>
            </div>

            <div className="flex flex-col items-start absolute left-[40.593rem] top-[21.504rem]">
              <span className="text-[1.438rem] leading-[1.563rem] text-color-oferta-span">
                Apenas
              </span>
              <span className="text-[2.625rem] leading-[1.75rem] text-color-oferta-h2 font-Lilita uppercase mt-[0.375rem]">
                Hoje
              </span>
            </div>
          </div>

          <div className="bg-oferta-yellow bg-no-repeat bg-cover h-[12.5rem] w-[23.125rem]">
            <div className="pl-[1.273rem] pt-[0.777rem]">
              <h3 className="text-[1.25rem] leading-[1.375rem] uppercase font-Lilita text-black">
                batata
              </h3>
              <span className="text-[1.125rem] leading-[1.563rem] text-texto">
                150kg
              </span>
            </div>
          </div>

          <div className="bg-oferta-brown bg-no-repeat h-[12.5rem] ">
            <div className="pl-[1.273rem] pt-[0.777rem]">
              <h3 className="text-[1.25rem] leading-[1.375rem] uppercase font-Lilita text-black">
                sorvete
              </h3>
              <span className="text-[1.125rem] leading-[1.563rem] text-texto">
                50kg
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[4rem] flex items-center">
          <div className=" relative overflow-hidden w-[35.625rem] h-[8.183rem] bg-color-button rounded-[0.625rem] py-[1.156rem] pl-[1.394rem] pr-[4.81rem] flex items-center justify-between">
            <div className="absolute top-[1rem] left-[-2.7rem] -rotate-45 py-[0.5rem] px-[3rem] text-[1rem] leading-[1.275rem] uppercase font-Lilita bg-titulo-cardapio text-texto">
              {isOpen ? "Aberto" : "Fechado"}
            </div>
            <div className=" bg-timer rounded-[3rem] h-[5.927rem] w-[5.927rem] flex justify-center items-center">
              <img src={Timer} alt="Timer" />
            </div>

            <div className="h-[5.171rem] border-[1px] border-traco-funcionamento"></div>
            <div>
              <h2 className="text-[1.563rem] leading-[1.75rem] uppercase font-Lilita text-texto">
                Horário de funcionamento
              </h2>
              <p className="text-[1rem] leading-[1.375rem] font-bold text-texto-funcionamento ">
                Segunda-feira a sexta-feira: 17h00 - 23h00{" "}
              </p>
              <p className="text-[1rem] leading-[1.375rem] font-bold text-texto-funcionamento ">
                Sabado a Domíngo: 18h00 - 23h00{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col ml-[1.875rem]">
            <span className="text-[1.125rem] leading-[1.563rem] text-texto">
              Não esqueça de marcar a gente no Instagram:
            </span>
            <span className="text-[1.751rem] leading-[1.75rem] text-color-button uppercase mt-[0.206rem] font-Lilita">
              #empireburger
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
