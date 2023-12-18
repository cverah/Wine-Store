import { Button, Container, Link } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useState } from "react";
import WindowModal from "../../utils/WindowModal";
import PropTypes from "prop-types";
import { url_whatsapp } from "../../url_whatsapp";

const WinerMostSales = ({ title, winers }) => {
  const [open, setOpen] = useState(false);
  const [dataWine, setdataWine] = useState({});
  const handleOpen = (idWine) => {
    const Wine = winers.find((element) => element.id === idWine);
    setdataWine(Wine);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative mb-2">
        <h2
          className="text-2xl font-extrabold uppercase"
          style={{ color: "darkred" }}
        >
          {title}
        </h2>
        <hr className="mb-4 border-2" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 relative">
          {winers.map((wine) => (
            <div key={wine.id} className="backdrop-blur-lg p-2 rounded-lg">
              <div className="flex flex-col gap-1">
                <h3
                  className="text-lg uppercase text-center font-bold tracking-wide"
                  style={{ color: "darkred" }}
                >
                  {wine.name}
                </h3>
                <img
                  src={wine.url_picture}
                  alt=""
                  className="h-72 rounded-lg"
                />
                <div className="flex gap-4 items-center justify-center xl:items-baseline">
                  <strong className="uppercase" style={{ color: "darkred" }}>
                    Precio <small>(Unidad {wine.content})</small>:
                  </strong>
                  <strong
                    className="uppercase text-2xl xl:text-xl xl:w-2/5"
                    style={{ color: "black" }}
                  >
                    {wine.price_unit}
                  </strong>
                </div>
                {wine.box["quantity"] && wine.box["price_box"] ? (
                  <div className="flex gap-4 items-center justify-center xl:items-baseline">
                    <strong className="uppercase" style={{ color: "darkred" }}>
                      Precio <small>(Caja {wine.box["quantity"]} Unid.)</small>:
                    </strong>
                    <strong
                      className="uppercase text-2xl xl:text-xl xl:w-2/5"
                      style={{ color: "black" }}
                    >
                      {wine.box["price_box"]}
                    </strong>
                  </div>
                ) : (
                  <div className="flex gap-4 items-center justify-center">
                    <strong className="uppercase" style={{ color: "darkred" }}>
                      Esta bebida solo se vende x unidad
                    </strong>
                  </div>
                )}
                <Button
                  variant="contained"
                  startIcon={<RemoveRedEyeIcon />}
                  style={{
                    backgroundColor: "darkred",
                  }}
                  classes={{
                    focusVisible: "focus-visible",
                  }}
                  onClick={() => handleOpen(wine.id)}
                >
                  Ver Detalles
                </Button>
                <Button
                  component={Link}
                  variant="contained"
                  startIcon={<WhatsAppIcon />}
                  style={{
                    backgroundColor: "darkgreen",
                  }}
                  classes={{
                    focusVisible: "focus-visible",
                  }}
                  href={url_whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quiero comprarlo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <WindowModal open={open} handleClose={handleClose} Wine={dataWine} />
    </>
  );
};

WinerMostSales.propTypes = {
  title: PropTypes.string,
  winers: PropTypes.array,
};

export default WinerMostSales;
