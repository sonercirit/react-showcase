import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import Header from "./index";
import redux from "../../data/redux";

describe("Header", () => {
  const shallowWrapper = mount(
    <Provider store={redux}>
      <Header />
    </Provider>
  );
  it("should have login button", () => {
    const button = shallowWrapper.find(".loginButton");
    expect(button.length).toEqual(1);
  });

  it("should have trial button", () => {
    const button = shallowWrapper.find(".trialButton");
    expect(button.length).toEqual(1);
  });

  it("should reset successfully", () => {
    const button = shallowWrapper.find(".titleClickable").simulate("click");
    expect(button.length).toEqual(1);
  });
});
