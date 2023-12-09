import PropTypes from "prop-types";
const HeaderMobile = ({ isOpen }) => {
  return (
    <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>
      <hr />
      <div className="space-y-1 px-2 pb-3 pt-2">
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

        <a
          href="#"
          className=" text-white block rounded-md px-3 py-2 text-base uppercase hover:underline underline-offset-4 font-medium"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="text-white block rounded-md px-3 py-2 text-base uppercase hover:underline underline-offset-4 font-medium"
        >
          Team
        </a>
        <a
          href="#"
          className="text-white block rounded-md px-3 py-2 text-base uppercase hover:underline underline-offset-4 font-medium"
        >
          Projects
        </a>
        <a
          href="#"
          className="text-white block rounded-md px-3 py-2 text-base uppercase hover:underline underline-offset-4 font-medium"
        >
          Calendar
        </a>
      </div>
    </div>
  );
};

HeaderMobile.propTypes = {
  isOpen: PropTypes.bool,
};

export default HeaderMobile;