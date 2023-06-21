import { ImgHTMLAttributes } from "react";

import Burger from "/icons/burger.svg";

interface CardPros extends ImgHTMLAttributes<HTMLImageElement> {
  title: string;
  content: string;
}

export function Card(props: CardPros) {
  return (
    <div className="w-[15rem] flex justify-between items-center">
      <img
        src={props.src}
        alt={props.alt}
        className="bg-[#FAE2CB] p-[0.906rem] rounded-3xl"
      />
      <div className="w-[10.629rem] ml-[1.125rem]">
        <h3 className="uppercase text-[1.25rem] leading-[1.375rem] text-black font-Lilita">
          {props.title}
        </h3>
        <p className="text-[1rem] leading-[1.188rem] mt-[0.313rem] text-black/60">
          {props.content}
        </p>
      </div>
    </div>
  );
}
