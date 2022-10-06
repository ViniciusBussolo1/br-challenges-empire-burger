import Timer from "../../assets/icons/timer.svg";

export function Ofertas() {
  return (
    <section id="ofertas" className="max-w-[73.185rem] mt-[9rem] mx-auto">
      <h1 className="text-[2rem] leading-[2.188rem] font-Lilita uppercase text-black">
        Ofertas especiais
      </h1>
      <p className="text-[1rem] leading-[1.375rem] text-texto mt-[0.25rem]">
        Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque
        sempre estamos mudando o nosso cardapio.
      </p>
      <div className="w-full grid grid-cols-[48.125rem_25rem] gap-1 mt-4 relative">
        <div className="bg-oferta-red w-[48.125rem] h-[26.875rem]">
          <div className="pl-[1.063rem] pt-[0.777rem]">
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
        <div className="place-self-center">
          <div className="bg-oferta-yellow w-[23.185rem] h-[12.5rem]">
            <div className="pl-[1.273rem] pt-[0.777rem]">
              <h3 className="text-[1.25rem] leading-[1.375rem] uppercase font-Lilita text-black">
                batata
              </h3>
              <span className="text-[1.125rem] leading-[1.563rem] text-texto">
                150kg
              </span>
            </div>
          </div>
          <div className="bg-oferta-brown w-[23.185rem] h-[12.5rem] mt-[1.875rem]">
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
      </div>

      <div className="mt-[4rem] flex items-center">
        <div className="w-[35.625rem] h-[8.183rem] bg-color-button rounded-[0.625rem] py-[1.156rem] pl-[1.394rem] pr-[4.81rem] flex items-center justify-between">
          <img
            src={Timer}
            alt="Timer"
            className="p-[1.401rem] bg-timer rounded-[3rem]"
          />
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
          <span className="text-[1.751rem] leading-[1.75rem] text-color-button uppercase mt-[0.206rem]">
            #empireburger
          </span>
        </div>
      </div>
    </section>
  );
}
