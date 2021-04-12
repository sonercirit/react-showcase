import React from "react";
import { ReactComponent as FacebookLogo } from "../../assets/social/facebook-white.svg";
import { ReactComponent as TwitterLogo } from "../../assets/social/twitter-white.svg";
import { ReactComponent as InstagramLogo } from "../../assets/social/instagram-white.svg";
import { ReactComponent as AppStore } from "../../assets/store/app-store.svg";
import { ReactComponent as PlayStore } from "../../assets/store/play-store.svg";
import { ReactComponent as WindowsStore } from "../../assets/store/windows-store.svg";
import "./index.css";
import "../common.css";

function getFooterLinksSpacing(index: number) {
  if (index !== 0) {
    return <span>&nbsp;| </span>;
  }
  return "";
}

export const footerLinks = [
  "Home",
  "Terms and Conditions",
  "Privacy Policy",
  "Condition Statement",
  "Help",
  "Manage Account",
].map((value, index) => (
  <li className="listElement" key={value}>
    {getFooterLinksSpacing(index)}
    <a className="link" href="https://www.example.com">
      {value}
    </a>
  </li>
));

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max colorWhite footerPadding">
        <div>
          <ul className="footerList">{footerLinks}</ul>
        </div>
        <div className="copyrightPadding">
          <br />
          Copyright © 2021 DEMO Streaming. All Rights Reserved.
        </div>
        <div className="footerBottom">
          <div className="footerBottomElement">
            <FacebookLogo className="socialScale" />
            <TwitterLogo className="socialScale socialMargin" />
            <InstagramLogo className="socialScale socialMargin" />
          </div>
          <div className="footerBottomElement footerBottomRight">
            <AppStore className="socialScale" />
            <PlayStore className="socialScale socialMargin" />
            <WindowsStore className="socialScale socialMargin" />
          </div>
        </div>
      </div>
    </footer>
  );
}
