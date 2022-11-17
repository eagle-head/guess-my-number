/**
 * @format
 */

import "react-native";
import React from "react";
import { render, screen, cleanup } from "test-utils";

import App from "../src/App";

describe("App", () => {
  afterEach(cleanup);

  it("should render correctly", () => {
    render(<App />);

    // get the image background
    const ImageBackground = screen.getByRole("image").props.source.testUri;
    expect(ImageBackground).toBe("../../../src/assets/images/background.png");

    // get the primary heading
    const PrimaryHeading = screen.getByRole("header", { name: /guess my number/i });
    expect(PrimaryHeading).toBeTruthy();

    // get the secondary heading
    const SecondaryHeading = screen.getByRole("header", { name: /enter a number/i });
    expect(SecondaryHeading).toBeTruthy();

    // get the TextInput element with default value equals to ""
    const TextInput = screen.getByRole("search").props.value;
    expect(TextInput).toBe("");

    // get the reset button
    const ResetButton = screen.getByRole("button", { name: /reset/i });
    expect(ResetButton).toBeTruthy();

    // get the confirm button
    const ConfirmButton = screen.getByRole("button", { name: /confirm/i });
    expect(ConfirmButton).toBeTruthy();
  });
});
