import { Alert } from "react-native";
import React from "react";
import { render, screen, cleanup, fireEvent } from "test-utils";
import { GameScreen } from "../Game";

describe("Game", () => {
  afterEach(cleanup);

  test("should trigger alert modal", () => {
    const AlertSpy = jest.spyOn(Alert, "alert");

    render(<GameScreen userNumber={99} onGameOver={jest.fn()} />);

    const LessButton = screen.getByRole("button", { name: "-" });
    fireEvent.press(LessButton);
    expect(AlertSpy).toBeCalledTimes(1);
  });
});
