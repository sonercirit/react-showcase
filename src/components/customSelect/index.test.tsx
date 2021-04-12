import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import CustomSelect from "./index";
import { getDropdownItems } from "../../mockup";
import redux from "../../data/redux";

describe("Custom Select", () => {
  it("should render 3 options", () => {
    const wrapper = shallow(
      <Provider store={redux}>
        <CustomSelect options={getDropdownItems(3)} />
      </Provider>
    );
    const results = wrapper.children().props().options;

    expect(results.length).toEqual(3);
  });
});
