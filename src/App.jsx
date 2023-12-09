import BackgroundWeb from "./utils/BackgroundWeb";
import Header from "./components/Header/Header";
import WinerMostSales from "./components/WinerMostSales/WinerMostSales";
import Footer from "./components/Footer/Footer";
import SectionTitle from "./components/SectionTitle/SectionTitle";

function App() {
  //aqui link de imagen para fondo de la web
  const imagesURL =
    "https://res.cloudinary.com/dvxvdktvr/image/upload/v1701884219/samples/Wine-Store/pa3cd7p4sbvy8jwniaw1.webp";
  return (
    <>
      <BackgroundWeb imagesURL={imagesURL} />
      <Header />
      <SectionTitle />
      <WinerMostSales />
      <Footer />
    </>
  );
}

export default App;
