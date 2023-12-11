import BackgroundWeb from "./utils/BackgroundWeb";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Catalogue } from "./pages/Catalogue";

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
        {/*}
        <Route
          path="/update_food/:foodId"
          element={<UpdateProduct onUpdate={handleUpdateProduct} />}
        /> */}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
