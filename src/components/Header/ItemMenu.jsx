import { Link } from "react-router-dom";

const ItemMenu = () => {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        <Link
          to="/"
          className="text-white rounded-md uppercase px-3 py-2 text-base font-medium hover:underline  underline-offset-4"
          aria-current="page"
        >
          Inicio
        </Link>
        <Link
          to="/catalogo"
          className="text-white rounded-md uppercase px-3 py-2 text-base font-medium hover:underline  underline-offset-4"
        >
          Catalogo
        </Link>
        <Link
          to="/contacto"
          className="text-white rounded-md uppercase px-3 py-2 text-base font-medium hover:underline  underline-offset-4"
        >
          Contacto
        </Link>
        {/* <a
          href="#"
          className="text-white rounded-md uppercase px-3 py-2 text-base font-medium hover:underline  underline-offset-4"
        >
          Calendar
        </a> */}
      </div>
    </div>
  );
};

export default ItemMenu;
