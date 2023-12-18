import BackgroundWeb from "./utils/BackgroundWeb";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Catalogue } from "./pages/Catalogue";
import Contact from "./pages/Contact";
import GoWhastapp from "./utils/GoWhastapp";

function App() {
  //aqui link de imagen para fondo de la web
  const imagesURL =
    "https://res.cloudinary.com/dvxvdktvr/image/upload/v1701884219/samples/Wine-Store/pa3cd7p4sbvy8jwniaw1.webp";
  return (
    <>
      <BackgroundWeb imagesURL={imagesURL} />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/catalogo" element={<Catalogue />} />
        <Route path="/contacto" element={<Contact />} />
        {/*}
        <Route
          path="/update_food/:foodId"
          element={<UpdateProduct onUpdate={handleUpdateProduct} />}
        /> */}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <GoWhastapp />
    </>
  );
}

export default App;
