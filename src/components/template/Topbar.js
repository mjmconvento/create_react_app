import React from "react";
import { Image, Icon } from "semantic-ui-react";
import logo from "./images/logo-cropped.png";
import './css/global.css';
import './css/topbar.css';

class Topbar extends React.Component {
  render() {
    return (
      <div>
        <div style={{ color: "gray" }} id="topbar_icons_wrapper">
          <Image
            src={logo}
            className="sv-logo"
          />

          <Icon
            name="power"
            className="topbar-icon"
            size="large"
          />
          <Icon
            name="setting"
            className="topbar-icon"
            size="large"
          />
          <Icon
            name="bell"
            className="topbar-icon"
            size="large"
          />
          <Icon
            name="search"
            className="topbar-icon"
            size="large"
          />
        </div>
      </div>
    );
  }
}

export default Topbar;
