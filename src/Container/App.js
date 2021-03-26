import { PrimaryButton } from "Components/Button";
import Navbar from "Components/Navbar";
import ProfileCard from "Components/ProfileCard";
import { AppWrapper } from "./StyledComponents";
import { developerData } from "data/developerData";
import Header from "Components/Header";

function App() {
  return (
    <AppWrapper>
      <Header />

      <ProfileCard developerData={developerData} />
    </AppWrapper>
  );
}

export default App;
