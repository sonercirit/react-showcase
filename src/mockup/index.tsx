import React from "react";
import "./index.css";
import { ReactComponent as FacebookLogo } from "../assets/social/facebook-white.svg";
import { ReactComponent as TwitterLogo } from "../assets/social/twitter-white.svg";
import { ReactComponent as InstagramLogo } from "../assets/social/instagram-white.svg";
import { ReactComponent as AppStore } from "../assets/store/app-store.svg";
import { ReactComponent as PlayStore } from "../assets/store/play-store.svg";
import { ReactComponent as WindowsStore } from "../assets/store/windows-store.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/search-icon.svg";
import CustomSelect from "../components/customSelect";
import getData from "../data/data";

function getFooterLinksSpacing(index: number) {
  if (index !== 0) {
    return <span>&nbsp;| </span>;
  }
  return "";
}

export function getDropdownItems(count: number) {
  const results = [];
  for (let i = 0; i < count; i += 1) {
    const name = `Dropdown Item ${i + 1}`;
    results.push({ label: name, value: name, key: name });
  }
  return results;
}

function getDisplayed() {
  const data = getData();

  return data.map((val) => (
    <div className="posterDiv" key={val.title}>
      <img
        className="poster"
        src={val.images["Poster Art"].url}
        alt={val.title}
      />
      <div className="posterTitle">{val.title}</div>
    </div>
  ));
}

export default function Mockup() {
  const footerLinks = [
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
  return (
    <div>
      <header>
        <div className="topBar shadow blueBackground">
          <div className="blueBar max">
            <div className="section">
              <h1 className="colorWhite titleMargin">DEMO Streaming</h1>
            </div>
            <div className="rightSection section">
              <a className="link" href="https://www.example.com">
                <div>Log in</div>
              </a>
              <div>
                <a
                  className="trialButton greyBackground link"
                  href="https://www.example.com"
                >
                  Start your free trial
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="greyBackground shadow">
          <div className="max">
            <h2 className="popular colorWhite">Popular Movies</h2>
          </div>
        </div>
      </header>
      <div className="max bodyMargin">
        <div className="bodyTop">
          <div className="searchBar">
            <input
              type="text"
              placeholder="Search..."
              className="searchTerm lightShadow"
            />
            <button
              className="blueBackground searchButton lightShadow"
              type="submit"
            >
              <SearchIcon className="searchIcon" />
            </button>
          </div>
          <div className="filler" />
          <div className="sortBar">
            <CustomSelect options={getDropdownItems(3)} />
          </div>
        </div>
      </div>
      <div className="posterContainer">{getDisplayed()}</div>
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
    </div>
  );
}
