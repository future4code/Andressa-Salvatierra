import React from "react";
import { FeedPage } from "./index"
import renderer from "react-test-renderer";

it("renders correctly", () => {
    const tree = renderer
        .create(<FeedPage />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})
