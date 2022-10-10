import { ImgHTMLAttributes } from "react";

interface CardEntregaProps extends ImgHTMLAttributes<HTMLImageElement> {
  title: string;
  content: string;
}

export function CardEntregas(props: CardEntregaProps) {
  return (
    <div className="h-[5.625rem] mt-[1rem] bg-white rounded-[0.625rem] hover:drop-shadow-cardEntregas flex items-center pl-[1.434rem] py-[0.938rem]">
      <div className="bg-[#FAE2CB] p-[0.938rem] rounded-[5rem] h-[3.75rem] w-[3.75rem] flex items-center">
        <img src={props.src} alt="WhatsApp" />
      </div>
      <div className="w-[23.962rem] h-[2.875rem] ml-[2.635rem]">
        <h3 className="text-[1.25rem] leading-[1.375rem] uppercase font-Lilita">
          {props.title}
        </h3>
        <p className="text-[1rem] leading-[1.188rem] text-texto mt-[0.2rem]">
          {props.content}
        </p>
      </div>
    </div>
  );
}
