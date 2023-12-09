import { Container } from "@mui/material";
import SliderWine from "./SliderWine/SliderWine";
import TitleWeb from "./TitleWeb";

const SectionTitle = () => {
  return (
    <Container className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mb-2 relative">
      <div className="flex flex-col gap-2 items-center sm:flex-row">
        <div className="w-full sm:w-2/5">
          <TitleWeb />
        </div>
        <div className="w-full sm:w-3/5">
          <SliderWine />
        </div>
      </div>
    </Container>
  );
};

export default SectionTitle;
