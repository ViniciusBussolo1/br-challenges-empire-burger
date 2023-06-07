export function Localization() {
  return (
    <section className="pt-16" id="localization">
      <div className="h-[3.938] w-[27.735rem] mx-auto text-center">
        <h1 className="text-[2rem] leading-[2.188rem] uppercase font-Lilita text-black">
          Onde ficar a nosso castelo
        </h1>
        <p className="text-[1rem] leading-[1.375rem] text-center text-texto mt-1 ">
          Estaremos de portas abertas para a nossa realeza.
        </p>
      </div>
      <div className="w-full h-[12.955rem] mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58503.32387970499!2d-46.66906365777401!3d-23.587911204762754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f8c61020205%3A0x9ae474c606fef4!2sMercado%20Municipal%20de%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1662576852728!5m2!1spt-BR!2sbr"
          height="100%"
          width="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google maps"
        ></iframe>
      </div>
    </section>
  );
}
