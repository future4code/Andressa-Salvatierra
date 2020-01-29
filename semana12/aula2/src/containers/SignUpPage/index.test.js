import React from "react";
import { SignUpPage } from "./index"
import renderer from "react-test-renderer";

it("Tests if SignUpPage renders correctly", () => {
    const tree = renderer
        .create(<SignUpPage />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})
