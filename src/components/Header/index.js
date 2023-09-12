import React, { useState } from "react";
import Navigation from "../Navigation";
import About from "../About/index";
import Favorites from "../Favorites/index";
import Notifications from "../Notifications/index";
import PokeCard from "../PokeCard/index";
import PokeList from "../PokeList/index";
import Search from "../Search/index";

function Header() {
  const [currentPage, pageHandler] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "":
        return <></>;
      case "":
        return <></>;
      case "":
        return <></>;
      case "":
        return <></>;
    }
  };

  return (
    <div>
      <Navigation currentPage={currentPage} pageHandler={pageHandler} />
      <div>{renderPage()}</div>
    </div>
  );
}

export default Header;
