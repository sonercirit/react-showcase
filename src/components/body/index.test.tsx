import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import Body from "./index";
import Filter from "../Filter";
import redux from "../../data/redux";

describe("Body", () => {
  const node = (
    <Provider store={redux}>
      <Body />
    </Provider>
  );
  it("should get filter", () => {
    const render = mount(node);
    render.find(".posterDiv").first().simulate("click");
    const filter = render.find(Filter);
    expect(filter.length).toEqual(1);
  });

  it("should get series", () => {
    const render = mount(node);
    render.find(".posterDiv").first().simulate("click");
    const posters = render.find(".posterDiv");
    expect(posters.length).toEqual(21);
  });

  it("should get movies", () => {
    const render = mount(node);
    render.find(".posterDiv").last().simulate("click");
    const posters = render.find(".posterDiv");
    expect(posters.length).toEqual(21);
  });
});
