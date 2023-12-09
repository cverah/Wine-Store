import { Button, Container, Link } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WinerMostSales = () => {
  return (
    <Container className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative mb-2">
      <h2
        className="text-2xl font-extrabold uppercase"
        style={{ color: "darkred" }}
      >
        Productos Mas Vendidos
      </h2>
      <hr className="mb-4 border-2" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 relative">
        {/* item */}
        <div className=" backdrop-blur-lg p-2 rounded-lg">
          <div className="flex flex-col gap-1">
            <h3
              className="text-lg uppercase text-center font-bold tracking-wide"
              style={{ color: "darkred" }}
            >
              Vino Borgoña
            </h3>
            <img
              src="https://res.cloudinary.com/dvxvdktvr/image/upload/v1702078543/samples/Wine-Store/gxay63fvbi1scmsv4t8z.webp"
              alt=""
              className="h-72 rounded-lg"
            />
            <div className="flex gap-4 items-center">
              <strong className="uppercase" style={{ color: "darkred" }}>
                Precio <small>(Unidad 750ml)</small>:
              </strong>
              <strong
                className="uppercase text-2xl xl:text-xl"
                style={{ color: "black" }}
              >
                S/ 12.00
              </strong>
            </div>
            <div className="flex gap-4 items-center">
              <strong className="uppercase" style={{ color: "darkred" }}>
                Precio <small>(Caja 12 Unid.)</small>:
              </strong>
              <strong
                className="uppercase text-2xl xl:text-xl"
                style={{ color: "black" }}
              >
                S/ 85.00
              </strong>
            </div>
            <Button
              component={Link}
              variant="contained"
              startIcon={<RemoveRedEyeIcon />}
              style={{
                backgroundColor: "darkred",
              }}
              classes={{
                focusVisible: "focus-visible",
              }}
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
            >
              Quiero comprarlo
            </Button>
          </div>
        </div>

        {/* item */}
        <div className=" backdrop-blur-lg p-2 rounded-lg">
          <div className="flex flex-col gap-1">
            <h3
              className="text-lg uppercase text-center font-bold tracking-wide"
              style={{ color: "darkred" }}
            >
              Vino Borgoña
            </h3>
            <img
              src="https://res.cloudinary.com/dvxvdktvr/image/upload/v1702078543/samples/Wine-Store/gxay63fvbi1scmsv4t8z.webp"
              alt=""
              className="h-72 rounded-lg"
            />
            <div className="flex gap-4 items-center">
              <strong className="uppercase" style={{ color: "darkred" }}>
                Precio <small>(Unidad 750ml)</small>:
              </strong>
              <strong
                className="uppercase text-2xl xl:text-xl"
                style={{ color: "black" }}
              >
                S/ 12.00
              </strong>
            </div>
            <div className="flex gap-4 items-center">
              <strong className="uppercase" style={{ color: "darkred" }}>
                Precio <small>(Caja 12 Unid.)</small>:
              </strong>
              <strong
                className="uppercase text-2xl xl:text-xl"
                style={{ color: "black" }}
              >
                S/ 85.00
              </strong>
            </div>
            <Button
              component={Link}
              variant="contained"
              startIcon={<SendIcon />}
              style={{
                backgroundColor: "darkred",
              }}
              classes={{
                focusVisible: "focus-visible",
              }}
            >
              Cotizar por Mayor
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
            >
              Quiero comprarlo
            </Button>
          </div>
        </div>

        {/* item */}
        <div className=" backdrop-blur-lg p-2 rounded-lg">
          <div className="flex flex-col gap-1">
            <h3
              className="text-lg uppercase text-center font-bold tracking-wide"
              style={{ color: "darkred" }}
            >
              Vino Borgoña
            </h3>
            <img
              src="https://res.cloudinary.com/dvxvdktvr/image/upload/v1702078543/samples/Wine-Store/gxay63fvbi1scmsv4t8z.webp"
              alt=""
              className="h-72 rounded-lg"
            />
            <div className="flex gap-4 items-center">
              <strong className="uppercase" style={{ color: "darkred" }}>
                Precio <small>(Unidad 750ml)</small>:
              </strong>
              <strong
                className="uppercase text-2xl xl:text-xl"
                style={{ color: "black" }}
              >
                S/ 12.00
              </strong>
            </div>
            <div className="flex gap-4 items-center">
              <strong className="uppercase" style={{ color: "darkred" }}>
                Precio <small>(Caja 12 Unid.)</small>:
              </strong>
              <strong
                className="uppercase text-2xl xl:text-xl"
                style={{ color: "black" }}
              >
                S/ 85.00
              </strong>
            </div>
            <Button
              component={Link}
              variant="contained"
              startIcon={<SendIcon />}
              style={{
                backgroundColor: "darkred",
              }}
              classes={{
                focusVisible: "focus-visible",
              }}
            >
              Cotizar por Mayor
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
            >
              Quiero comprarlo
            </Button>
          </div>
        </div>

        {/* item */}
        <div className=" backdrop-blur-lg p-2 rounded-lg">
          <div className="flex flex-col gap-1">
            <h3
              className="text-lg uppercase text-center font-bold tracking-wide"
              style={{ color: "darkred" }}
            >
              Vino Borgoña
            </h3>
            <img
              src="https://res.cloudinary.com/dvxvdktvr/image/upload/v1702078543/samples/Wine-Store/gxay63fvbi1scmsv4t8z.webp"
              alt=""
              className="h-72 rounded-lg"
            />
            <div className="flex gap-4 items-center">
              <strong className="uppercase" style={{ color: "darkred" }}>
                Precio <small>(Unidad 750ml)</small>:
              </strong>
              <strong
                className="uppercase text-2xl xl:text-xl"
                style={{ color: "black" }}
              >
                S/ 12.00
              </strong>
            </div>
            <div className="flex gap-4 items-center">
              <strong className="uppercase" style={{ color: "darkred" }}>
                Precio <small>(Caja 12 Unid.)</small>:
              </strong>
              <strong
                className="uppercase text-2xl xl:text-xl"
                style={{ color: "black" }}
              >
                S/ 85.00
              </strong>
            </div>
            <Button
              component={Link}
              variant="contained"
              startIcon={<SendIcon />}
              style={{
                backgroundColor: "darkred",
              }}
              classes={{
                focusVisible: "focus-visible",
              }}
            >
              Cotizar por Mayor
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
            >
              Quiero comprarlo
            </Button>
          </div>
        </div>

        {/* item */}
        <div className=" backdrop-blur-lg p-2 rounded-lg">
          <div className="flex flex-col gap-1">
            <h3
              className="text-lg uppercase text-center font-bold tracking-wide"
              style={{ color: "darkred" }}
            >
              Vino Borgoña
            </h3>
            <img
              src="https://res.cloudinary.com/dvxvdktvr/image/upload/v1702078543/samples/Wine-Store/gxay63fvbi1scmsv4t8z.webp"
              alt=""
              className="h-72 rounded-lg"
            />
            <div className="flex gap-4 items-center">
              <strong className="uppercase" style={{ color: "darkred" }}>
                Precio <small>(Unidad 750ml)</small>:
              </strong>
              <strong
                className="uppercase text-2xl xl:text-xl"
                style={{ color: "black" }}
              >
                S/ 12.00
              </strong>
            </div>
            <div className="flex gap-4 items-center">
              <strong className="uppercase" style={{ color: "darkred" }}>
                Precio <small>(Caja 12 Unid.)</small>:
              </strong>
              <strong
                className="uppercase text-2xl xl:text-xl"
                style={{ color: "black" }}
              >
                S/ 85.00
              </strong>
            </div>
            <Button
              component={Link}
              variant="contained"
              startIcon={<SendIcon />}
              style={{
                backgroundColor: "darkred",
              }}
              classes={{
                focusVisible: "focus-visible",
              }}
            >
              Cotizar por Mayor
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
            >
              Quiero comprarlo
            </Button>
          </div>
        </div>

        {/* item */}
        <div className=" backdrop-blur-lg p-2 rounded-lg">
          <div className="flex flex-col gap-1">
            <h3
              className="text-lg uppercase text-center font-bold tracking-wide"
              style={{ color: "darkred" }}
            >
              Vino Borgoña
            </h3>
            <img
              src="https://res.cloudinary.com/dvxvdktvr/image/upload/v1702078543/samples/Wine-Store/gxay63fvbi1scmsv4t8z.webp"
              alt=""
              className="h-72 rounded-lg"
            />
            <div className="flex gap-4 items-center">
              <strong className="uppercase" style={{ color: "darkred" }}>
                Precio <small>(Unidad 750ml)</small>:
              </strong>
              <strong
                className="uppercase text-2xl xl:text-xl"
                style={{ color: "black" }}
              >
                S/ 12.00
              </strong>
            </div>
            <div className="flex gap-4 items-center">
              <strong className="uppercase" style={{ color: "darkred" }}>
                Precio <small>(Caja 12 Unid.)</small>:
              </strong>
              <strong
                className="uppercase text-2xl xl:text-xl"
                style={{ color: "black" }}
              >
                S/ 85.00
              </strong>
            </div>
            <Button
              component={Link}
              variant="contained"
              startIcon={<SendIcon />}
              style={{
                backgroundColor: "darkred",
              }}
              classes={{
                focusVisible: "focus-visible",
              }}
            >
              Cotizar por Mayor
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
            >
              Quiero comprarlo
            </Button>
          </div>
        </div>

        {/* item */}
        <div className=" backdrop-blur-lg p-2 rounded-lg">
          <div className="flex flex-col gap-1">
            <h3
              className="text-lg uppercase text-center font-bold tracking-wide"
              style={{ color: "darkred" }}
            >
              Vino Borgoña
            </h3>
            <img
              src="https://res.cloudinary.com/dvxvdktvr/image/upload/v1702078543/samples/Wine-Store/gxay63fvbi1scmsv4t8z.webp"
              alt=""
              className="h-72 rounded-lg"
            />
            <div className="flex gap-4 items-center">
              <strong className="uppercase" style={{ color: "darkred" }}>
                Precio <small>(Unidad 750ml)</small>:
              </strong>
              <strong
                className="uppercase text-2xl xl:text-xl"
                style={{ color: "black" }}
              >
                S/ 12.00
              </strong>
            </div>
            <div className="flex gap-4 items-center">
              <strong className="uppercase" style={{ color: "darkred" }}>
                Precio <small>(Caja 12 Unid.)</small>:
              </strong>
              <strong
                className="uppercase text-2xl xl:text-xl"
                style={{ color: "black" }}
              >
                S/ 85.00
              </strong>
            </div>
            <Button
              component={Link}
              variant="contained"
              startIcon={<SendIcon />}
              style={{
                backgroundColor: "darkred",
              }}
              classes={{
                focusVisible: "focus-visible",
              }}
            >
              Cotizar por Mayor
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
            >
              Quiero comprarlo
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WinerMostSales;
