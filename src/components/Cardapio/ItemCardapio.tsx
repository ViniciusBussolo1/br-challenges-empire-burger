import { StyleHTMLAttributes } from "react";

interface ItemsProps extends StyleHTMLAttributes<HTMLStyleElement> {
  title: string;
  content: string;
}

export function ItemCardapio(props: ItemsProps) {
  const formCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className={props.className}>
      <h3 className="text-[1.25rem] leading-[1.375rem] uppercase text-titulo-cardapio font-Lilita">
        {props.title}
        .........................................................................{" "}
        <span>{formCurrency.format(49.99)}</span>
      </h3>
      <p className="text-[1rem] leading-[1.375rem] text-color-oferta-h2 max-w-[29.375rem] mt-[0.25rem]">
        {props.content}{" "}
      </p>
    </div>
  );
}
