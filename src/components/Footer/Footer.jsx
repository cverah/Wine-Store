import { Container } from "@mui/material";
import Movistar from "../../assets/icons/icono-movistar.svg";
import Bitel from "../../assets/icons/icono-bitel.svg";

const Footer = () => {
  const DateNow = new Date();
  const year = DateNow.getFullYear();

  return (
    <footer className="bg-gradient-to-br from-red-900 to-pink-500">
      <Container className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white text-sm uppercase text-center font-bold tracking-widest">
        <div className="grid grid-cols-1 gap-3 relative py-2 sm:grid-cols-1 md:grid-cols-3 md:gap-1">
          <div>
            <p>Abancay - Apurimac Peru</p>
          </div>
          <div className="flex flex-col justify-center md:justify-start gap-2">
            <p className="underline underline-offset-2">Contactanos :</p>
            <ul className="">
              <li>
                <div className="flex justify-center gap-2 items-center">
                  <img src={Bitel} alt="" className="w-8 h-8" />
                  <p>+51 928646027</p>
                </div>
              </li>
              <li>
                <div className="flex justify-center gap-2 items-center">
                  <img src={Movistar} alt="" className="w-5 h-5" />
                  <p>+51 959602455</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <p>Se hace Servicio delivery</p>
            <small className="text-xs">
              (Solo para personas que residen en Abancay - Apurimac)
            </small>
          </div>
        </div>
        <hr />
        <div className="py-2 normal-case">
          <p>© Copyrigth {year}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
