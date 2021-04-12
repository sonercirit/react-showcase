import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import Filter from "./index";
import redux from "../../data/redux";

describe("Filter", () => {
  it("should get dropdown with 4 options", () => {
    const render = mount(
      <Provider store={redux}>
        <Filter />
      </Provider>
    );
    const sortBar = render.find(".sortBar");
    expect(sortBar.children().props().options.length).toEqual(4);
  });
});
