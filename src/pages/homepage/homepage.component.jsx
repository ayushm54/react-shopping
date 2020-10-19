import React from "react";

// since we are now using styled components lib (CSS in JS), the scss file is not needed
// import "./homepage.styles.scss";
import MainMenu from "../../components/main-menu/main-menu.component";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  return (
    // <div className="homepage">
    //   <MainMenu />
    // </div>
    <HomePageContainer>
      <MainMenu />
    </HomePageContainer>
  );
};

export default HomePage;
