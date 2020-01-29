import React from "react";
import { LoginPage } from "./index"
import renderer from "react-test-renderer";

it("Tests if LoginPage renders correctly", () => {
    const tree = renderer
        .create(<LoginPage></LoginPage>)
        .toJSON()
    expect(tree).toMatchSnapshot()
})
