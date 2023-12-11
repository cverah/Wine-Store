import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import WinerMostSales from "../components/WinerMostSales/WinerMostSales";

export const Catalogue = () => {
  const winer = [];
  return (
    <>
      <Header />
      <WinerMostSales title={"Nuestro Catalogo"} winers={winer} />
      <Footer />
    </>
  );
};
