import { mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Routes } from "./App";
import Main from "./Main";
import Mockup from "./mockup";
import redux from "./data/redux";

describe("App", () => {
  it("should get mockup page", () => {
    const app = mount(
      <Provider store={redux}>
        <MemoryRouter initialEntries={["/mockup"]}>
          <Routes />
        </MemoryRouter>{" "}
      </Provider>
    );
    const main = app.find(Main);
    const mockup = app.find(Mockup);
    expect(main.length).toEqual(0);
    expect(mockup.length).toEqual(1);
  });

  it("should get main page", () => {
    const app = mount(
      <Provider store={redux}>
        <MemoryRouter initialEntries={["/"]}>
          <Routes />
        </MemoryRouter>
      </Provider>
    );
    const main = app.find(Main);
    const mockup = app.find(Mockup);
    expect(main.length).toEqual(1);
    expect(mockup.length).toEqual(0);
  });
});
