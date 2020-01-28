import React from "react";
import { LoginPage } from "./index"
import renderer from "react-test-renderer";

it("renders correctly", () => {
    const tree = renderer
        .create(<LoginPage></LoginPage>)
        .toJSON()
    expect(tree).toMatchSnapshot()
})
