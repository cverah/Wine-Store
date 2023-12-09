import { Container } from "@mui/material";
import IconBarMovile from "./IconBarMovile";
import Logo from "./Logo";
import ItemMenu from "./ItemMenu";
import HeaderMobile from "./HeaderMobile";
import { useState } from "react";

const Header = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  function handleMenuMobile(event) {
    event.preventDefault();
    setOpenMenuMobile(!openMenuMobile);
  }

  return (
    <nav className="bg-gradient-to-br from-red-900 to-pink-500 sticky top-0 z-50 mb-2">
      <Container className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div
            className="flex flex-shrink-0 items-center"
            onClick={handleMenuMobile}
          >
            <IconBarMovile />
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-between">
            <Logo handleMenuMobile={handleMenuMobile} />
            <ItemMenu />
          </div>
        </div>
      </Container>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <HeaderMobile isOpen={openMenuMobile} />
    </nav>
  );
};

export default Header;
