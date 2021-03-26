import { HeroWrapper } from "./StyledComponents";

const HeroSection = (props) => {
  return (
    <HeroWrapper>
      <div className="heading_container">
        <h1 className="hero_title"> We Build Product</h1>
        <h3 className="hero_sub_title"> Ideation to Realization</h3>
      </div>
      <div className="image_container">
        <img src="https://originative360.com/wp-content/uploads/2020/09/HEAD-Project_management_features_report-_Is_2019_the_year_to_replace_your_current_solution-_Hero.png" />
      </div>
    </HeroWrapper>
  );
};

export default HeroSection;
