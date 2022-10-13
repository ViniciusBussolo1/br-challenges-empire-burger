import { StyleHTMLAttributes } from "react";

interface ItemsProps extends StyleHTMLAttributes<HTMLStyleElement> {
  plate: string;
  price: number;
  ingredients: string;
}

export function ItemCardapio(props: ItemsProps) {
  const formCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className={props.className}>
      <div className="w-[42rem] mt-[0.988rem] flex items-center justify-between ">
        <h3 className="text-[1.25rem] leading-[1.375rem] uppercase text-titulo-cardapio font-Lilita">
          {" "}
          {props.plate}
        </h3>
        <span className="text-titulo-cardapio font-Lilita text-[1.25rem]">
          .........................................................................
        </span>
        <span className="text-[1.25rem] leading-[1.375rem] uppercase text-titulo-cardapio font-Lilita">
          {formCurrency.format(props.price)}
        </span>
      </div>

      <p className="text-[1rem] leading-[1.375rem] text-color-oferta-h2 max-w-[29.375rem] mt-[0.25rem]">
        {props.ingredients}{" "}
      </p>
    </div>
  );
}
