import React, { useState } from "react";
import { connect } from 'react-redux';
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
        default:
          <Navigation></Navigation>
    }
  };

  return (
    <div>
      <Navigation currentPage={currentPage} pageHandler={pageHandler} />
      <div>{renderPage()}</div>
    </div>
  );
};


const mapStateToProps = (state) => ({
  dataFromRedux: state.data,
});

// export default Header;

export default connect(mapStateToProps)(renderPage);