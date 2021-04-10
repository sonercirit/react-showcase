import React from "react";
import { shallow } from "enzyme";
import CustomSelect from "./index";
import { getDropdownItems } from "../../mockup";

describe("Custom Select", () => {
  it("should render 3 options", () => {
    const wrapper = shallow(<CustomSelect options={getDropdownItems(3)} />);
    const results = wrapper.props().options;

    expect(results.length).toEqual(3);
  });
});
