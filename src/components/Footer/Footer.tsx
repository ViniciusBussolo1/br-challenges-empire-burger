import LogoFooter from "../../assets/logo-footer.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Ifood from "../../assets/icons/ifood.svg";

export function Footer() {
  return (
    <footer className="pt-[1.774rem]">
      <div className="max-w-[73.125rem] mx-auto flex items-center justify-between">
        <a href="#home">
          <img src={LogoFooter} alt="Logo" />
        </a>

        <nav>
          <ul className="flex gap-8">
            <li className="text-[1.125rem] leading-[1.563rem] text-color-footer hover:text-color-hover hover:font-bold">
              <a href="#home">Home</a>{" "}
            </li>
            <li className="text-[1.125rem] leading-[1.563rem] text-color-footer hover:text-color-hover hover:font-bold">
              <a href="#localization">Localização</a>{" "}
            </li>
            <li className="text-[1.125rem] leading-[1.563rem] text-color-footer hover:text-color-hover hover:font-bold">
              <a href="#cardapio">Cardapio</a>{" "}
            </li>
            <li className="text-[1.125rem] leading-[1.563rem] text-color-footer hover:text-color-hover hover:font-bold">
              <a href="#home">Sobre</a>{" "}
            </li>
          </ul>
        </nav>

        <div className="flex justify-center items-center gap-3">
          <a href="">
            <img src={Ifood} alt="Ifood" />
          </a>
          <a href="">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>

      <div className="max-w-[73.125rem] border-[1px] border-color-border-footer mx-auto mt-[1.734rem]"></div>

      <div className="mx-auto w-[22.313rem] mt-[0.697rem]">
        <small className="text-[0.875rem] leading-[1.188rem] font-bold text-center text-color-small-footer">
          <span className="text-color-span-footer ">2022 © EmpireBurger.</span>{" "}
          Todos os direitos reservados.
        </small>
      </div>
    </footer>
  );
}
