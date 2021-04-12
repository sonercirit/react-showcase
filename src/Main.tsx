import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";
import "./Main.css";
import NotFound from "./components/notFound";

export default function Main({ notFound = false }: any) {
  return (
    <div className="main">
      <Header />
      {notFound ? <NotFound /> : <Body />}
      <Footer />
    </div>
  );
}
