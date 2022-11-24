import { Alert } from "react-native";
import React from "react";
import { render, screen, cleanup, fireEvent } from "test-utils";
import { StartGame } from "../StartGame";

describe("StartGame", () => {
  afterEach(cleanup);

  test("should renders correctly", () => {
    render(<StartGame onPickNumber={jest.fn()} />);

    // get the TextInput and change the value to "51"
    const TextInput = screen.getByRole("search");
    fireEvent.changeText(TextInput, "51");
    expect(TextInput.props.value).toBe("51");

    // press reset button and change the TextInput value to ""
    const ResetButton = screen.getByRole("button", { name: /reset/i });
    fireEvent.press(ResetButton);
    expect(TextInput.props.value).toBe("");

    // enter a valid value
    fireEvent.changeText(TextInput, "51");
    const ConfirmButton = screen.getByRole("button", { name: /confirm/i });
    fireEvent.press(ConfirmButton);
  });

  test("should show alert modal under three different triggers", () => {
    const AlertSpy = jest.spyOn(Alert, "alert");

    render(<StartGame onPickNumber={jest.fn()} />);

    const TextInput = screen.getByRole("search");

    const ConfirmButton = screen.getByRole("button", { name: /confirm/i });

    // enter invalid value: not a number
    fireEvent.changeText(TextInput, "abc");
    fireEvent.press(ConfirmButton);
    expect(AlertSpy).toBeCalled();

    // enter invalid value: less than 1
    fireEvent.changeText(TextInput, "0");
    fireEvent.press(ConfirmButton);
    expect(AlertSpy).toBeCalled();

    // enter invalid value: more than 99
    fireEvent.changeText(TextInput, "100");
    fireEvent.press(ConfirmButton);
    expect(AlertSpy).toBeCalled();
  });
});
