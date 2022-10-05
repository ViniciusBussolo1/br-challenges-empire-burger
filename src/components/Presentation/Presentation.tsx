export function Presentation() {
  return (
    <div className="flex flex-col items-start max-w-[1170px] w-full mx-auto py-36 ">
      <h2 className="text-[1.3rem] leading-[1.438rem] text-black/90 font-black">
        Uma nova experiência!
      </h2>
      <h1 className="text-[4.853rem] mt-2 uppercase leading-[5.313rem] text-brown font-Lilita">
        king <span className="text-yellow">burger</span>
      </h1>
      <span className="text-[1.4rem] leading-[2rem] text-black/70 mt-1">
        Para quem tem um{" "}
        <span className="bg-yellow rounded-md p-2 text-center text-brown font-bold">
          Apetite de um REI!
        </span>
      </span>
      <button className="bg-color-button px-5 py-[0.625rem] rounded-md mt-5 text-white">
        Comprar Agora
      </button>
    </div>
  );
}
