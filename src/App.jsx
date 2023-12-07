import BackgroundWeb from "./utils/BackgroundWeb";
import Header from "./utils/Header/Header";

function App() {
  //aqui link de imagen para fondo de la web
  const imagesURL =
    "https://res.cloudinary.com/dvxvdktvr/image/upload/v1701884219/samples/Wine-Store/pa3cd7p4sbvy8jwniaw1.webp";
  return (
    <>
      <BackgroundWeb imagesURL={imagesURL} />
      <Header />
    </>
  );
}

export default App;
