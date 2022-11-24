/**
 * @format
 */

import "react-native";
import React from "react";
import { render, screen, cleanup, fireEvent } from "test-utils";

import App from "../App";

describe("App", () => {
  afterEach(cleanup);

  it("should render correctly", () => {
    render(<App />);

    // get the image background
    const ImageBackground = screen.getByRole("image").props.source.testUri;
    expect(ImageBackground).toBe("../../../src/assets/images/background.png");

    // get the TextInput element with default value equals to ""
    const TextInput = screen.getByRole("search");
    expect(TextInput.props.value).toBe("");
  });

  test("should render the game screen", async () => {
    render(<App />);

    const TextInput = screen.getByRole("search");

    // start the game and change to game screen
    fireEvent.changeText(TextInput, "51");
    const ConfirmButton = screen.getByRole("button", { name: /confirm/i });
    fireEvent.press(ConfirmButton);
    const TitleFromGameScreen = await screen.findByRole("text", { name: /opponent's guess/i });
    expect(TitleFromGameScreen).toBeTruthy();
  });
});
