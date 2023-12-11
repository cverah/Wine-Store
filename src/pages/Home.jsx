import Header from "../components/Header/Header";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import WinerMostSales from "../components/WinerMostSales/WinerMostSales";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const winer = [];
  return (
    <>
      <Header />
      <SectionTitle />
      <WinerMostSales title={"Productos mas vendidos"} winers={winer} />
      <Footer />
    </>
  );
};

export default Home;
