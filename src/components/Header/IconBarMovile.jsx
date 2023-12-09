const IconBarMovile = () => {
  return (
    <div
      className="inset-y-0 left-0 flex items-center sm:hidden"
      style={{ border: "1px solid white", borderRadius: "8px" }}
    >
      {/* <!-- Mobile menu button--> */}
      <button
        type="button"
        className="relative inline-flex items-center justify-center p-2 text-white hover:bg-red-600 focus:ring-2 focus:ring-inset focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
        style={{ borderRadius: "8px" }}
      >
        <svg
          className="block h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default IconBarMovile;
