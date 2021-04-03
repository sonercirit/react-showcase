import React from "react";
import "./index.css";

export default function Mockup() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Amazing Frontend Mockup</title>
      </head>
      <body>
        <header>
          <div className="topBar shadow">
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
              <h2 className="popular colorWhite">Popular Titles</h2>
            </div>
          </div>
        </header>
      </body>
    </html>
  );
}
