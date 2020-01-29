import React from "react";
import { NewPostCard } from "./index"
import renderer from "react-test-renderer";

it("Tests if the NewPostCard (container for creating new posts) renders correctly", () => {
    const tree = renderer
        .create(<NewPostCard />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})
