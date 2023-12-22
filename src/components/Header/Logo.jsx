import styled from "@emotion/styled";
import ImgLogo from "../../assets/icons/NotoGrapes.svg";
import { useNavigate } from "react-router-dom";

const P = styled.p`
  -webkit-text-stroke: 0.1px white;
`;

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex gap-5 items-center cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img className="w-auto h-12" src={ImgLogo} alt="Logo Company" />
      <P className="text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-orange-600">
        VINOS ABANCAY
      </P>
    </div>
  );
};

export default Logo;
