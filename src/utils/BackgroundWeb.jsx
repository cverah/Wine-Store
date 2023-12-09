import PropTypes from "prop-types";
const BackgroundWeb = ({ imagesURL }) => {
  return (
    <div
      className={`inset-0 fixed z-0 `}
      style={{
        backgroundImage: `url(${imagesURL})`,
        backgroundSize: "100% 100%", // 100 horizontal 100 vertical con cover solo agrnada la imagen
        backgroundRepeat: "no-repeat",
        opacity: "0.3",
      }}
    ></div>
  );
};

BackgroundWeb.propTypes = {
  imagesURL: PropTypes.string,
};

export default BackgroundWeb;
