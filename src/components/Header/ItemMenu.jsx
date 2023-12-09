const ItemMenu = () => {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        <a
          href="#"
          className="text-white rounded-md uppercase px-3 py-2 text-base font-medium hover:underline  underline-offset-4"
          aria-current="page"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="text-white rounded-md uppercase px-3 py-2 text-base font-medium hover:underline  underline-offset-4"
        >
          Team
        </a>
        <a
          href="#"
          className="text-white rounded-md uppercase px-3 py-2 text-base font-medium hover:underline  underline-offset-4"
        >
          Projects
        </a>
        <a
          href="#"
          className="text-white rounded-md uppercase px-3 py-2 text-base font-medium hover:underline  underline-offset-4"
        >
          Calendar
        </a>
      </div>
    </div>
  );
};

export default ItemMenu;
