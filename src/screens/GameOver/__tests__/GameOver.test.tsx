import "react-native/";
import React from "react";
import { render, screen, cleanup } from "test-utils";
import { GameOver } from "../GameOver";

jest.mock("react-native/Libraries/Utilities/Dimensions", () => {
  return {
    get: () => ({
      width: 375,
      height: 667,
    }),
    addEventListener: jest.fn(),
  };
});

describe("GameOver", () => {
  afterEach(cleanup);

  test("should renders correctly", () => {
    render(<GameOver userNumber={51} roundsNumber={10} onStartNewGame={jest.fn()} />);

    // get the title
    const Title = screen.getByRole("header", { name: /game over!/i });
    expect(Title).toBeTruthy();

    // get the image
    const Image = screen.getByRole("image").props.source.testUri;
    expect(Image).toBe("../../../src/assets/images/success.png");

    // get userNumber = 51
    const UserNumber = screen.getByText("51");
    expect(UserNumber).toBeTruthy();

    // get roundsNumber = 10
    const RoundsNumber = screen.getByText("10");
    expect(RoundsNumber).toBeTruthy();

    // get 'start new game' Button
    const Button = screen.getByRole("button", { name: /start new game/i });
    expect(Button).toBeTruthy();
  });
});
