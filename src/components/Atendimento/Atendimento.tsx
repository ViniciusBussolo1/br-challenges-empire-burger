export function Atendimento() {
  return (
    <section className="mx-auto h-[45rem] flex items-center justify-center border-[1px] border-border">
      <div className="max-w-[73.185rem] flex items-center">
        <div className="bg-card-woman-eating bg-no-repeat h-[28.481rem] w-[35.625rem] "></div>
        <div className="ml-[2.091rem] pt-[15.528rem] pb-[10.753rem]">
          <h1 className="text-[2.608rem] leading-[3.2rem] font-Lilita uppercase tex-black w-[20.291rem]">
            Atendimento{" "}
            <span className="bg-yellow rounded-md p-1">personalizado</span>
          </h1>
          <p className="text-[1.304rem] leading-[1.813rem] text-texto w-[30.151rem] mt-3">
            Todos os nossos clientes são tratados como rei e rainha, com a nossa
            culinária artesanal.
          </p>
          <button className="py-[0.652rem] px-[1.304rem] bg-color-button rounded-[0.326rem] text-[1.467rem] leading-[2.063rem] text-center text-white mt-[1.283rem]">
            Cardápio Imperial
          </button>
        </div>
      </div>
    </section>
  );
}
