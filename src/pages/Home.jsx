import Header from "../components/Header/Header";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import WinerMostSales from "../components/WinerMostSales/WinerMostSales";
import Footer from "../components/Footer/Footer";
import { dataWine } from "../data_wine";

const Home = () => {
  //ordenar descendente y los primeros 5
  const winers = dataWine
    .sort((a, b) => b.qualification - a.qualification)
    .slice(0, 5);

  console.log(winers);
  return (
    <>
      <Header />
      <SectionTitle />
      <WinerMostSales title={"Productos mas vendidos"} winers={winers} />
      <Footer />
    </>
  );
};

export default Home;
