import React from "react";
import { PostCard } from "./index"
import renderer from "react-test-renderer";

it("Tests if the PostCard (single post container) renders correctly", () => {
    const tree = renderer
        .create(<PostCard />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})
