import { Box, Button, Link, Modal, Typography } from "@mui/material";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { url_whatsapp } from "../url_whatsapp";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  border: "2px solid darkred",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4, //padding
};

const WindowModal = ({ open, handleClose, Wine }) => {
  const navigate = useNavigate();

  const handleContact = (event) => {
    event.preventDefault();
    navigate("/contacto");
  };
  console.log(Wine);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={style}
        className="bg-gradient-to-br from-red-200 to-slate-50 w-9/12 max-w-2xl"
      >
        <div className="flex gap-4 flex-col items-center sm:flex-row mb-3">
          <div className="w-full sm:w-1/2">
            <div className="flex justify-center">
              <img
                src={Wine.url_picture}
                alt="img"
                className="rounded-lg shadow shadow-slate-400 h-72 sm:h-96"
              />
            </div>
          </div>
          <div className=" flex flex-col w-full sm:w-1/2">
            <h3
              id="modal-modal-title"
              className="text-center text-red-800 text-xl font-bold sm:text-3xl"
            >
              {Wine.name}
            </h3>
            <Typography
              id="modal-modal-title"
              variant="small"
              component="small"
              className="text-center text-red-800 text-base"
            >
              {Wine.size} - {Wine.content}
            </Typography>

            <table className="table-auto mt-3 border-collapse w-full">
              <tbody>
                <tr className="text-lg sm:text-base md:text-lg">
                  <td className="flex items-start">
                    <strong className="text-red-800 text-xl">Tipo:</strong>
                  </td>
                  <td>
                    <p className="font-bold">{Wine.type}</p>
                  </td>
                </tr>
                <tr className="h-3"></tr>
                <tr className="text-lg sm:text-base md:text-lg">
                  <td className="flex items-start">
                    <strong className="text-red-800 text-xl">Precio:</strong>
                  </td>
                  <td>
                    <p className="font-bold">{Wine.price_unit} (x unidad)</p>
                    {Wine?.box?.["price_box"] && Wine?.box?.["quantity"] ? (
                      <p className="font-bold">
                        {Wine.box["price_box"]} (x caja {Wine.box["quantity"]}{" "}
                        uds)
                      </p>
                    ) : (
                      <p className="font-bold">
                        ESTA BEBIDA SOLO SE VENDE X UNIDAD
                      </p>
                    )}
                  </td>
                </tr>
                <tr className="h-3"></tr>
                <tr>
                  <td colSpan="2">
                    <Button
                      variant="contained"
                      component={Link}
                      startIcon={<WhatsAppIcon />}
                      style={{
                        backgroundColor: "darkgreen",
                      }}
                      classes={{
                        focusVisible: "focus-visible",
                      }}
                      className="w-full"
                      href={url_whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quiero Comprar
                    </Button>
                  </td>
                </tr>
                <tr className="h-3"></tr>
                <tr>
                  <td colSpan="2">
                    <Button
                      component={Link}
                      variant="contained"
                      startIcon={<ShoppingCartIcon />}
                      style={{
                        backgroundColor: "darkred",
                      }}
                      classes={{
                        focusVisible: "focus-visible",
                      }}
                      className="w-full"
                      href="/contacto"
                      onClick={handleContact}
                    >
                      Quiero comprar x mayor
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <Button
          className="w-full"
          variant="contained"
          startIcon={<CloseIcon />}
          onClick={handleClose}
        >
          Cerrar
        </Button>
      </Box>
    </Modal>
  );
};

WindowModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  Wine: PropTypes.object,
};

export default WindowModal;
