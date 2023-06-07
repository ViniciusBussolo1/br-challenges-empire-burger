import Phone from "../../assets/icons/phone.svg";

export function Pedido() {
  return (
    <section className="pt-[6.195rem]">
      <div className="mx-auto max-w-[73.031rem] h-[7.69rem] py-[0.882rem] pl-[1.394rem] pr-[2.241rem] bg-color-button rounded-[0.625rem] flex justify-between items-center">
        <div className="w-[40rem] flex items-center">
          <div className="h-[5.927rem] w-[5.927rem] bg-timer rounded-[3rem] flex justify-center items-center">
            <img src={Phone} alt="Phone" />
          </div>

          <div className="h-[5.171rem] border-[1px] border-traco-funcionamento mr-[0.966rem] ml-[0.966rem]"></div>

          <div className="w-[29.142rem] h-[4.911rem]">
            <h2 className="text-[1.563rem] leading-[1.75rem] font-Lilita text-texto uppercase">
              faça o seu pedido agora mesmo!
            </h2>
            <p className="text-[1rem] leading-[1.375rem] text-color-oferta-h2 mt-[0.348rem]">
              Venha saborear a melhor experiência de hamburguenses artesanal do
              Empires Burger, com temática medieval!
            </p>
          </div>
        </div>

        <button className="w-[12.25rem] h-[2.625rem] rounded-[0.25rem] py-[0.5rem] px-[1rem] text-[1.125rem] leading-[1.563rem] text-center uppercase text-color-button font-black bg-titulo-cardapio">
          Solicitar Pedido
        </button>
      </div>
    </section>
  );
}
