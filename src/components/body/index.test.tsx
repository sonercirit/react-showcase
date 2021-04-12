import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import Body from "./index";
import Filter from "../Filter";
import redux from "../../data/redux";

describe("Body", () => {
  it("should get filter", () => {
    const render = mount(
      <Provider store={redux}>
        <Body />
      </Provider>
    );
    render.find(".posterDiv").first().simulate("click");
    const filter = render.find(Filter);
    expect(filter.length).toEqual(1);
  });

  it("should get series", () => {
    const render = mount(
      <Provider store={redux}>
        <Body />
      </Provider>
    );
    render.find(".posterDiv").first().simulate("click");
    const posters = render.find(".posterDiv");
    expect(posters.length).toEqual(21);
  });
});
