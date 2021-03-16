import { PrimaryButton } from "Components/Button";
import Navbar from "Components/Navbar";
import ProfileCard from "Components/ProfileCard";
import { AppWrapper } from "./StyledComponents";
import { developerData } from "data/developerData";

function App() {
  return (
    <AppWrapper>
      <ProfileCard developerData={developerData} />
    </AppWrapper>
  );
}

export default App;
