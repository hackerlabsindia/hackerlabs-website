import { HeroWrapper } from "./StyledComponents";

const HeroSection = (props) => {
  return (
    <HeroWrapper id="hero">
      <div className="heading_container">
        <h1 className="hero_title"> We Build </h1>
        <h1 className="hero_title1">🌎 & 📱</h1>
        <h1 className="hero_title"> Products</h1>
        <h3 className="hero_sub_title"> Ideation to Realization</h3>
        <h1 className="hero_title2"> #Remote</h1>
      </div>
      <div className="image_container">
        <img
          src=""
          alt="hero"
        />
      </div>
    </HeroWrapper>
  );
};

export default HeroSection;
