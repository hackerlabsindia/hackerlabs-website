import React from "react";

import PortfolioHeader from "@hackerlabs/Container/Portfolio/Header";

import PortfolioMainPage from "@hackerlabs/Container/Portfolio/MainPage";

const page = () => {
  return (
    <main className=" {inter.variable} bg-background min-h-screen font-light antialiased __variable_aaf875">
      <div className="font-inter border-color m-auto h-9 w-full border-l border-r max-w-clamp-custom "></div>
      <PortfolioHeader />
      <div className="border-color m-auto min-h-screen border-l border-r max-w-clamp-custom">
        <PortfolioMainPage />
      </div>
    </main>
  );
};

export default page;
