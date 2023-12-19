import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ButtonLink = ({ content, route }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="my-2">
        <button
          className="relative bg-red-800 py-1 px-4 rounded-md text-xl text-white uppercase"
          onClick={() => navigate(route)}
        >
          {content}
        </button>
      </div>
    </Container>
  );
};

ButtonLink.propTypes = {
  content: PropTypes.string,
  route: PropTypes.string,
};

export default ButtonLink;
