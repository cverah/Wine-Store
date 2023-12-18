import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import WinerMostSales from "../components/WinerMostSales/WinerMostSales";
import { dataWine } from "../data_wine";

export const Catalogue = () => {
  const winers = dataWine.sort((a, b) => a.id - b.id);
  return (
    <>
      <Header />
      <WinerMostSales title={"Nuestro Catalogo"} winers={winers} />
      <Footer />
    </>
  );
};
