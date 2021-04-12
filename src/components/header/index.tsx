import React from "react";
import "./index.css";
import "../common.css";
import { useSelector } from "react-redux";

export default function Header() {
  const title = useSelector((val: any) => val.main.title);

  return (
    <header>
      <div className="topBar shadow blueBackground">
        <div className="blueBar max">
          <div className="section">
            <h1 className="colorWhite titleMargin">DEMO Streaming</h1>
          </div>
          <div className="rightSection section">
            <a className="link loginButton" href="https://www.example.com">
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
          <h2 className="popular colorWhite">{title}</h2>
        </div>
      </div>
    </header>
  );
}
