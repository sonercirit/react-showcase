import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <Header />
      <Body type="home" />
      <Footer />
    </div>
  );
}
