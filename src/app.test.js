import * as React from "react";
import * as ReactDOM from "react-dom";
import { getQueriesForElement } from "@testing-library/react";

import App from "./App"

test("should ", () => {
    const root = document.createElement("div")
    ReactDOM.render(<App />, root)
    const { getByText } = getQueriesForElement(root)
     expect(getByText("Hello world")).not.toBeNull()
});
