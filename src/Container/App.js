import { PrimaryButton } from "Components/Button";
import Navbar from "Components/Navbar";
import ProfileCard from "Components/ProfileCard";
import { AppWrapper } from "./StyledComponents";
import { developerData } from "data/developerData";
import Header from "Components/Header";
import HeroSection from "Components/HeroSection";
import TechStack from "Components/TechStack";
import Footer from "Components/Footer";
import Contact from "Components/Contact";

function App() {
  return (
    <AppWrapper>
      <Header />
      <HeroSection />
      <ProfileCard developerData={developerData} />
      <TechStack />
      <Contact />
      <Footer />
    </AppWrapper>
  );
}

export default App;
