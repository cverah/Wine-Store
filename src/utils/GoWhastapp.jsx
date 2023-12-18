import { Link } from "react-router-dom";
import { FaWhatsappSquare } from "react-icons/fa";
import { url_whatsapp } from "../url_whatsapp";

const GoWhastapp = () => {
  return (
    <Link to={url_whatsapp} target="_blank">
      <FaWhatsappSquare className="fixed z-50 rounded-xl bottom-5 right-3 text-7xl text-green-500 bg-white ransition-transform duration-200 hover:scale-110" />
    </Link>
  );
};

export default GoWhastapp;
